import React from "react";
import {useState} from "react";
import {Cookie, Eye, EyeOff} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
//import {useDispatch} from "react-redux";
//import {setUser} from "@/redux/userSlice";

export const SignIn = () => {
    const [username, setusername] = useState("");
    const [channelName, setChannelName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const [about, setabout] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        const result = fetch("http://localhost:5100/api/signUp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                profilePic: profilePic,
                about: about,
                channelName: channelName,
            }),
        });
        result
        .then((data) => data.json())
        .then((data) => {
            if (data.message) {
                alert(`${data.message} Channel name already exist , please restart server beofre trying again`);
            } else if (!data.token) {
                return;
            } else {
                localStorage.setItem("youtubeToken", data.token);
                navigator("/");
            }
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
                    {/* channelName */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="channelName"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Channel Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="channelName"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => setChannelName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* username */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
                            onChange={(e) => setusername(e.target.value)}
                            required
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                    {/* about */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            About
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="about"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => setabout(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* profie Pic */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="profilePic"
                            className="block text-sm font-medium text-foreground mb-1 text-slate-400"
                        >
                            Profile Pic
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                accept=""
                                id="profilePic"
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground pr-10"
                                onChange={(e) => setprofilePic(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        variant="outlined"
                        size="small"
                        type="submit"
                        className="w-full  py-2 px-4 rounded-md  transition duration-300"
                    >
                        Sign in
                    </Button>

                    {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-primary hover:underline">
                        Forgot password?
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
