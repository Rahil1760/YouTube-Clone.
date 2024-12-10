import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Header} from "../HeaderSection/Header";
import ReactPlayer from "react-player/lazy";
import {Comments} from "../CommnetsSection/Comments";
export const SelectedVideoPlay = () => {
    const params = useParams();
    const [mainVideo, setmainVideo] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchingSingleVideo = async () => {
            try {
                const responce = await fetch(`http://localhost:5100/api/getVideoById/${params.id}`, {
                    method: "GET",
                });
                const data = await responce.json();
                setmainVideo(data), setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchingSingleVideo();
    }, []);
    return (
        <section>
            <Header />
            <div>
                <div className="bg-black w-full h-[400px] md:flex">
                    <div className="flex-col w-full">
                        <div className="relative w-full h-[400px] mx-auto aspect-video">
                            <ReactPlayer
                                url={`${mainVideo.videoLink}`}
                                className="absolute top-0 left-0"
                                width="100%"
                                height="400px"
                                controls
                            />
                        </div>
                        <div className="w-full h-[500px] bg-gray-900">
                            <Comments props={mainVideo._id} />
                        </div>
                    </div>
                    <div className="hidden sm:hidden md:block md:min-w-[500px]  bg-red-900 md:h-[900px] h-[300px]"></div>
                </div>
            </div>
        </section>
    );
};
