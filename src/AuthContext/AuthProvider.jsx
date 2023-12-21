import { createContext } from "react";

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

export default AuthProvider;