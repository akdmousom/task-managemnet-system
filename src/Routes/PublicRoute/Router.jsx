import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../LayOuts/MainLayout";
import Home from "../../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default Router;