import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <div className="max-w-[1367px] mx-auto font-poppins">
                {/* Navigation bar added here */}
                <NavigationBar />


                <Outlet />




            </div>
            <div className="mt-20">
            <Footer />
            </div>
        </>
    );
};

export default MainLayout;