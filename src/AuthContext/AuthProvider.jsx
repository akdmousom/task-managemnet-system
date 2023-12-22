import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
export const AuthContext = createContext("null")
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{

        setLoading(true)

        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, img) =>{
        return updateProfile(auth.currentUser, {

            displayName: name,
            photoURL: img


        })
    } 

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user)=>{

            if (user) {
                setUser(user)
                
                
            }

            setLoading(false)

        })
        return () =>{
            return subscribe();
        }
    },[])

    const logOut = () =>{
        
        return signOut(auth)
       
    }

    const contextValue = {

        createUser,
        loginUser,
        signInWithGoogle,
        user,
        logOut,
        loading,
        setLoading,
        updateUserInfo



    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
}


export default AuthProvider;