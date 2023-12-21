import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../LayOuts/MainLayout";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <AboutUs />
            },

        ]
    },

    {
        path: '/login',
        element: <Login />
    },
    {

        path: '/register',
        element: <Register/>

    }
])

export default Router;