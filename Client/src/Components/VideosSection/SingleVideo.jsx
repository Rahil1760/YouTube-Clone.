import React from "react";
import {Link} from "react-router-dom";
export const SingleVideo = ({video}) => {
    return (
        <div className="w-11/12 md:w-96 sm:w-1/2 sm:p-1 h-72 mt-2 md:ml-2 bg-gray-900 rounded-xl">
            <Link to={`/Home/${video._id}`}>
                <div className="w-full h-3/4 bg-gray-700 rounded-t-xl flex items-center justify-center">
                    <img src={video.thumbnail} className="w-full h-full object-cover rounded-t-xl" />
                </div>

                <div className="w-full h-auto">
                    <p className="font-bold text-gray-400">{video.title}</p>
                    <Link className="w-full h-auto" to={`/${video.userId.channelName}`}>
                        <p className=" text-gray-600">{video.userId.channelName}</p>
                    </Link>
                    <p>{video.createdAt}</p>
                </div>
            </Link>
        </div>
    );
};
