import {RxHamburgerMenu} from "react-icons/rx";
import {useNavigate} from "react-router-dom";
import {TbDotsVertical} from "react-icons/tb";
import {FaRegCircleUser} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import {MdOutlineVideoCall} from "react-icons/md";

export function Header({toggleFunction}) {
    const loginUser = localStorage.getItem("youtubeToken");
    const navigator = useNavigate();
    return (
        <div className="flex bg-black items-center h-12 z-10">
            <div className="flex h-full items-center ">
                <div
                    className="h-10 w-10 rounded-full hover:bg-slate-800 hover:ease-in hover:duration-300 md:flex items-center justify-center hidden sm:block"
                    onClick={toggleFunction}
                >
                    <RxHamburgerMenu className="w-1/2 h-1/2 cursor-pointer hidden md:block text-slate-800 hover:text-black" />
                </div>
                <img
                    src={"/Yotube.png"}
                    className="h-[120px] w-[120px] cursor-pointer"
                    onClick={() => navigator("/Home")}
                />
            </div>
            <div className="w-1/2 m-auto">
                <div className="relative">
                    <input
                        placeholder="Search"
                        className="outline-none bg-gray-200 w-full text-md font-sans pl-4 rounded-full h-8"
                    />
                    <div className="absolute top-0 -right-1 " onClick={() => alert("hello")}>
                        <div className="bg-gray-900 md:w-20 h-8 w-12 -top- rounded-r-full flex justify-center cursor-pointer">
                            <CiSearch className="text-slate-400 w-1/2 md:w-1/3 h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-6 h-6 mr-4 hidden md:block cursor-pointer">
                <MdOutlineVideoCall className="text-white w-full h-auto" onClick={() => navigator("/uploadVideos")} />
            </div>
            <div className="md:flex mr-[2%] hidden ">
                <div className="cursor-pointer mt-1">
                    <button>
                        <TbDotsVertical className="text-white mt-2 mr-2" />
                    </button>
                </div>
                <div
                    className="bg-black border-2 border-slate-600 rounded-full pt-1 pb-1 pl-2 pr-2 text-slate-300 flex items-center w-26 justify-between cursor-pointer"
                    onClick={() => navigator("/SignUp")}
                >
                    <FaRegCircleUser />
                    <button className="mb-1 font-semibold">{loginUser ? "Sign Out" : "Sign in"}</button>
                </div>
            </div>
        </div>
    );
}
