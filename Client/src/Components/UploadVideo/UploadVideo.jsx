import React from "react";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
export const UploadVideo = () => {
    const [description, setdescription] = useState("");
    const [title, settitle] = useState("");
    const [videoLink, setvideoLink] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const [thumbnail, setthumbnail] = useState("");
    const [showvideoLink, setShowvideoLink] = useState(false);

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        const accessToken = localStorage.getItem("youtubeToken");
        const result = fetch("http://localhost:5100/api/addnewvideo", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `JWT ${accessToken}`,
            },
            body: JSON.stringify({
                description: description,
                videoLink: videoLink,
                profilePic: profilePic,
                thumbnail: thumbnail,
                title: title,
            }),
        });
        result
        .then((data) => data.json())
        .then((data) => {
            navigator("/Home");
        })
        .catch((erro) => {
            console.log(erro);
        });
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-card p-8 rounded-lg shadow-md border border-border w-full max-w-md bg-black">
                <div className="flex justify-center items-center mb-6">
                    <img
                        src={"/Yotube.png"}
                        className="h-[120px] w-[120px] cursor-pointer"
                        onClick={() => navigator("/")}
                    />
                    {/* <Youtube className="w-8 h-8 text-primary" /> */}
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Sign in</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* title */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Title
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="title"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => settitle(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* description */}
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Description
                        </label>
                        <input
                            id="description"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
                            onChange={(e) => setdescription(e.target.value)}
                            required
                        />
                    </div>
                    {/* videoLink */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="videoLink"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            videoLink
                        </label>
                        <div className="relative">
                            <input
                                id="videoLink"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => setvideoLink(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground"
                                onClick={() => setShowvideoLink(!showvideoLink)}
                            >
                                {showvideoLink ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                    {/* thumbnail */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="thumbnail"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            thumbnail
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="thumbnail"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => setthumbnail(e.target.value)}
                                required
                            />
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

                    {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-primary hover:underline">
                        Forgot videoLink?
                    </a>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-foreground">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
