import React from "react";
import {AsideBox2} from "./AsideBox2";
import {AsideBox1} from "./AsideBox1";
import {AsideBox3} from "./AsideBox3";
export const Aside = () => {
    return (
        <div className="bg-gray-900 h-lvh pt-10">
            <div className="h-full w-full">
                <div>
                    <div className="h-[200px] w-full">
                        <AsideBox1 />
                        <AsideBox2 />
                        <AsideBox3 />
                    </div>
                </div>
            </div>
        </div>
    );
};
