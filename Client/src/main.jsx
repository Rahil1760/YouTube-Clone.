import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AllVideos} from "./Components/Aside Section/VideosSection/AllVideos.jsx";
import {SignIn} from "./Components/HeaderSection/SignUp/SignIn.jsx";
import {UploadVideo} from "./Components/UploadVideo/UploadVideo.jsx";
import "./index.css";
import App from "./App.jsx";
import {SelectedVideoPlay} from "./Components/VideoSelectPlay/SelectedVideoPlay.jsx";
const app = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "/Home",
                element: <AllVideos />,
            },
            {
                path: "/Shorts",
                element: <div>Shorts</div>,
            },
            {
                path: "/All",
                element: <AllVideos />,
            },
        ],
    },
    {
        path: "/SignUp",
        element: <SignIn />,
    },
    {
        path: "/uploadVideos",
        element: <UploadVideo />,
    },
    {
        path: "Home/:id",
        element: <SelectedVideoPlay />,
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={app}>
            <App />
        </RouterProvider>
    </StrictMode>
);
