import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import TextField from "../Pages/TextField";
import StopWatch from "../Pages/StopWatch";
import Post from "../Pages/Post";
import NotFound from "../Pages/404";
import ParentPage from "../Pages/ParentPage";

let routes = createBrowserRouter([

    {
        path: "/parentpage",
        element: <ParentPage />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/textfield",
        element: <TextField />
    },
    {
        path: "/stopwatch",
        element: <StopWatch />
    },
    {
        path: "/post",
        element: <Post />
    },
    {
        path: "*",
        element: <NotFound />
    },

])

export default routes