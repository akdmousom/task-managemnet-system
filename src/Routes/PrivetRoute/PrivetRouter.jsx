import { Navigate, useLocation} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import PropTypes from 'prop-types';

const PrivetRouter = ({children}) => {

    const {user, loading} = UseAuth();

    const location = useLocation();

    

    if (loading) {
        return (
            <>
                <h1 className="w-full h-full flex justify-center items-center">Loading..</h1>
            </>
        );
    }

    if (user === undefined) {

        return <Navigate state={location.pathname} to={'/login'}></Navigate>

        
    }

    return children
};

PrivetRouter.propTypes = {
    children : PropTypes.node
}

export default PrivetRouter;