import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivetRouter = ({children}) => {

    const {user} = UseAuth();
    console.log(user);

    const navigate = useNavigate();

    const location = useLocation();

    console.log(location);

    if (user === undefined) {

        return <Navigate state={location.pathname} to={'/login'}></Navigate>

        
    }

    return children
};

export default PrivetRouter;