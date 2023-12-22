import { Link, Outlet } from "react-router-dom";
import { HiBars4 } from "react-icons/hi2";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><HiBars4  size={20}/></label>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={'/dashboard'}>Home</Link></li>
                    <li><Link to={'all-task'}>All Task</Link></li>
                    <li><Link to={'add-task'}>Add Task</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;