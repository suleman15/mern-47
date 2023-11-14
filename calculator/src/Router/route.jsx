import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import TextField from "../Pages/TextField";

let routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/textfield",
        element: <TextField />
    },
])

export default routes