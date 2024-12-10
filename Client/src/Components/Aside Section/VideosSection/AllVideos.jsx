import {useEffect, useState} from "react";
import {TailSpin} from "react-loader-spinner";
import {SingleVideo} from "../../VideosSection/SingleVideo";
export function AllVideos() {
    const accessToken = localStorage.getItem("youtubeToken");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:5100/api/getAllVideo", {
                    method: "GET",
                    headers: {
                        Authorization: `JWT ${accessToken}`,
                    },
                }); // Replace with the full URL if needed
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setVideos(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);
    console.log(videos);

    return (
        <div className="text-center bg-black h-auto flex justify-center">
            {loading ? (
                <div className="h-lvh w-full flex justify-center items-center">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div className="flex w-full flex-wrap justify-center">
                    {videos.map((video) => {
                        return <SingleVideo video={video} key={video._id} />;
                    })}
                </div>
            )}
        </div>
    );
}
