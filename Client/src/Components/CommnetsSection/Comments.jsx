import React, {useState, useEffect} from "react";
import {TailSpin} from "react-loader-spinner";
export const Comments = ({props}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [content, setContent] = useState("");
    const accessToken = localStorage.getItem("youtubeToken");
    //comments fetching
    // useEffect(() => {
    //     const fetchingSingleVideo = async () => {
    //         try {
    //             const responce = await fetch(`http://localhost:5100/api/getComments/${props}`, {
    //                 method: "GET",
    //                 headers: {
    //                     Accept: "application/json",
    //                     "Content-Type": "application/json",
    //                     Authorization: `JWT ${accessToken}`,
    //                 },
    //                 body: JSON.stringify({
    //                     content: content,
    //                 }),
    //             });
    //             const data = await responce.json();
    //             setComments(data), setLoading(false);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //     fetchingSingleVideo();
    // }, []);
    console.log("Porps", props);

    function handleComment() {
        useEffect(() => {
            const fetchingSingleVideo = async () => {
                try {
                    console.log("Iside try block", props);
                    const responce = await fetch(`http://localhost:5100/api/addComment/${props}`, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: `JWT ${accessToken}`,
                        },
                        body: JSON.stringify({
                            content: content,
                        }),
                    });
                    const data = await responce.json();
                    setComments(data), setLoading(false);
                } catch (error) {
                    console.log("error", error);
                }
            };
            fetchingSingleVideo();
        }, []);
    }
    console.log("data comment", comments);
    return (
        <div>
            {/* {error ? (
                alert("Something went wrong plase try again")
            ) : (
                <section>
                    {loading ? (
                        <div className="h-full w-full flex justify-center items-center">
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
                        <div>
                            <input type="Text" onChange={(e) => setContent(e.target.value)} />
                            <button>Comment</button>
                        </div>
                    )}
                </section>
            )} */}
            <div>
                <input type="Text" onChange={(e) => setContent(e.target.value)} />
                <button onClick={handleComment}>Comment</button>
            </div>
        </div>
    );
};
