import {IoSettings} from "react-icons/io5";
import {FiFlag} from "react-icons/fi";
import {MdHelp} from "react-icons/md";
import {MdFeedback} from "react-icons/md";
import {useNavigate} from "react-router-dom";
export function AsideBox3() {
    const navigator = useNavigate();
    const sideBarBox3 = [
        {
            title: "Setting",
            logo: <IoSettings />,
        },
        {
            title: "Report history",
            logo: <FiFlag />,
        },
        {
            title: "Help",
            logo: <MdHelp />,
        },
        {
            title: "Send feedback",
            logo: <MdFeedback />,
        },
    ];
    return (
        <div className=" w-full z-0">
            <div className="border-b-2 border-slate-800 pb-4">
                {sideBarBox3.map((item) => {
                    return (
                        <div className="pt-1 pb-1 flex items-center hover:bg-slate-800 w-full rounded-md justify-center space-x-2">
                            <div className="w-6 text-white flex items-center justify-center">{item.logo}</div>
                            <div className="basis-48">
                                <h1
                                    className="cursor-pointer text-md text-white"
                                    onClick={() => navigator(`/${item.title}`)}
                                >
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
