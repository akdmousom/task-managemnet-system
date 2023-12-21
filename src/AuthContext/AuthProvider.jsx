import { createContext } from "react";
import PropTypes from 'prop-type'
export const AuthContext = createContext("null")
const AuthProvider = ({children}) => {

    const contextValue = {
        
    }
    return (
       <AuthContext.Provider value={contextValue}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
}

export default AuthProvider;