import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import TextField from "../Pages/TextField";
import StopWatch from "../Pages/StopWatch";

let routes = createBrowserRouter([
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
])

export default routes