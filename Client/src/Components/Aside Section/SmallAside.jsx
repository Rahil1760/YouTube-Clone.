import React from "react";

import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {SiYoutubeshorts} from "react-icons/si";
import {FaUserCircle} from "react-icons/fa";

export function SmallAside() {
    const navigator = useNavigate();
    const sideBarFirstBox = [
        {
            logo: <HomeIcon />,
            title: "Home",
        },
        {
            logo: <SiYoutubeshorts />,
            title: "Shorts",
        },
        {
            logo: <FaUserCircle />,
            title: "You",
        },
    ];
    const handleRouting = (title) => {
        navigator(`${title}`);
    };

    return (
        <div className="w-16 bg-gray-900 h-[650px]">
            <div className=" w-full z-0 ">
                <div className=" pb-4 flex flex-col justify-center items-center space-y-10 pt-4 ">
                    {sideBarFirstBox.map((item) => {
                        return (
                            <div
                                className="flex flex-col hover:bg-slate-800 w-full rounded-md justify-center items-center pt-2 pb-2 cursor-pointer"
                                onClick={() => handleRouting(item.title)}
                            >
                                <div className="w-6 text-white flex justify-center">{item.logo}</div>
                                <div>
                                    <p className="text-white">{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
