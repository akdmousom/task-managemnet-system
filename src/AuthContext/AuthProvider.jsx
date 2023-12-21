import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-type'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
export const AuthContext = createContext("null")
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState()

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{

        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = () => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user)=>{

            if (user) {

                setUser(user)
                
            }

        })
        return () =>{
            return subscribe();
        }
    },[])

    const contextValue = {

        createUser,
        loginUser,
        signInWithGoogle,
        user,



    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;