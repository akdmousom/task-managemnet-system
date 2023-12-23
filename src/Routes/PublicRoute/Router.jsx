import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../LayOuts/MainLayout";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../LayOuts/Dashboard";
import DashBoardHome from "../../Pages/Dashboard/DashBoardHome/DashBoardHome";
import AddTask from "../../Pages/Dashboard/AddTask/AddTask";
import PrivetRouter from "../PrivetRoute/PrivetRouter";
import AllTask from "../../Pages/Dashboard/AllTask/AllTask";
import EditTask from "../../Pages/Dashboard/EditTask/EditTask";

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
        path: 'dashboard',
        element: <PrivetRouter><Dashboard/></PrivetRouter>,
        children:[
            {
                index: true,
                element: <PrivetRouter><DashBoardHome/></PrivetRouter>
            },
            {
                path: 'all-task',
                element: <AllTask/>
            },
            {
                path: 'add-task',
                element:<PrivetRouter><AddTask/></PrivetRouter>
            },
            {
                path: 'edit-task/:id',
                element: <PrivetRouter><EditTask/></PrivetRouter>,
                
            }
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