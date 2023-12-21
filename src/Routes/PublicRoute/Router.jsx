import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../LayOuts/MainLayout";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <AboutUs/>
            }
        ]
    }
])

export default Router;