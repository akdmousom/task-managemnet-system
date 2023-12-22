import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth
        
};

export default UseAuth;