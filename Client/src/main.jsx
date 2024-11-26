import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AllVideos} from "./Components/Aside Section/VideosSection/AllVideos.jsx";
import {FrontPageLayOut} from "./FrontPageLayOut.jsx";
import {SignIn} from "./Components/HeaderSection/SignUp/SignIn.jsx";
import "./index.css";
import App from "./App.jsx";
const app = createBrowserRouter([
    {
        path: "/",
        element: <FrontPageLayOut />,

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
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={app}>
            <App />
        </RouterProvider>
    </StrictMode>
);
