import React from "react";

import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {SiYoutubeshorts} from "react-icons/si";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export function AsideBox1() {
    const navigator = useNavigate();
    const sideBarFirstBox = [
        {
            title: "Home",
            logo: <HomeIcon />,
        },
        {
            title: "Shorts",
            logo: <SiYoutubeshorts />,
        },
        {
            title: "Subscription",
            logo: <SubscriptionsIcon />,
        },
    ];

    return (
        <div className=" w-full z-0 ">
            <div className="border-b-2 border-slate-800 pb-4 ">
                {sideBarFirstBox.map((item) => {
                    return (
                        <div className="pt-1 pb-1 flex  hover:bg-slate-800 w-full rounded-md justify-center space-x-2">
                            <div className="w-6 text-white flex items-center justify-center">{item.logo}</div>
                            <div className="basis-36">
                                <p
                                    className="cursor-pointer text-md text-white"
                                    onClick={() => navigator(`/${item.title}`)}
                                >
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
