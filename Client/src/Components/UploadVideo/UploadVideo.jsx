import React from "react";
import {Button} from "@mui/material";
import {useState} from "react";
import {Files} from "lucide-react";
export const UploadVideo = () => {
    const [file, setfile] = useState({});
    // const [string, setString] = useState({});
    const [videoDetails, setVideoDetails] = useState({});
    function fileExtraction(e) {
        setfile({
            ...file,
            [e.target.name]: e.target.file[0],
        });
    }
    // function stringExtraction(e) {
    //     setString({
    //         ...string,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    function showDetails(e) {
        e.preventDefault();
        setVideoDetails({...string, ...file});
        console.log(videoDetails);

        const data = new FormData();
        data.append("image", file);
        console.log("FD OBJECT", data);
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-md border border-border w-full max-w-md bg-black">
                <div className="flex justify-center items-center mb-6">
                    <img
                        src={"/Yotube.png"}
                        className="h-[120px] w-[120px] cursor-pointer"
                        onClick={() => navigator("/")}
                    />
                    {/* <Youtube className="w-8 h-8 text-primary" /> */}
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Sign in</h2>
                <form onSubmit={(e) => showDetails(e)}>
                    {/* <div className="mb-4">
                        <label
                            htmlFor="Title"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Title
                        </label>
                        <input
                            name="videoTitle"
                            type="text"
                            id="Title"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground bg-gray-400"
                            onChange={(e) => stringExtraction(e)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Description
                        </label>
                        <input
                            name="videoDescription"
                            type="text"
                            id="description"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground bg-gray-400"
                            onChange={(e) => stringExtraction(e)}
                            required
                        />
                    </div> */}
                    {/* <div className="mb-4">
                        <label
                            htmlFor="video"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Video
                        </label>
                        <input
                            name="Video"
                            type="file"
                            accept="video/*"
                            id="video"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
                            onChange={(e) => fileExtraction(e)}
                            required
                        />
                    </div> */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="Thumbnail"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Thumbnail
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                name="imgUrl"
                                accept="image/*"
                                id="Thumbnail"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => fileExtraction(e)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground"
                            ></button>
                        </div>
                    </div>
                    <Button
                        variant="outlined"
                        size="small"
                        type="submit"
                        className="w-full  py-2 px-4 rounded-md  transition duration-300"
                    >
                        Upload {/* {loading ? "Loading..." : "Sign In"} */}
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-primary hover:underline">
                        Forgot password?
                    </a>
                </div>
            </div>
            <div className="w-[200px] h-[200px]">{videoDetails.imgUrl && <img src={videoDetails.imgUrl} />}</div>
        </div>
    );
};
