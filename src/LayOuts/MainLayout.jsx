import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <div className="max-w-[1367px] mx-auto">
            {/* Navigation bar added here */}
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;