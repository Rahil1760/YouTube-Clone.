import {Aside} from "./Components/Aside Section/Aside";
import {Header} from "./Components/HeaderSection/Header";
import {SmallAside} from "./Components/Aside Section/SmallAside";
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {FrontPageButtons} from "./Components/FrontPageButton/FrontPageButtons";
import {FaHamburger} from "react-icons/fa";
export function FrontPageLayOut() {
    const [hambergToggle, setHambergToggle] = useState(true);
    function toggler() {
        setHambergToggle(!hambergToggle);
    }
    return (
        <div>
            <Header toggleFunction={toggler} />
            <div className="flex">
                <div className={hambergToggle ? "hidden md:block w-[190px]" : "w-18"}>
                    <div className="">{hambergToggle ? <Aside /> : ""}</div>
                    <div className="hidden sm:block">
                        {!hambergToggle ? (
                            <div>
                                <SmallAside />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="basis-full overflow-auto">
                    <div className="w-full h-10 bg-slate-900 md:flex items-center justify-center hidden">
                        <FrontPageButtons />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
