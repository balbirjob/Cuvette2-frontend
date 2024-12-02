import { createContext , useContext, useState,  useEffect} from "react";

export const AuthContext = createContext();


// export default AuthContext;

export const AuthProvider = ({ children }) => {
    

    const storeTokenInLS = (serverToken) => {
       
        return localStorage.setItem("token", serverToken);
    };
  





    return (
        <AuthContext.Provider value={{storeTokenInLS}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}