import React, { createContext, useContext } from 'react'

export const AuthContext=createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext);
}


 const AuthProvider = ({children}) => {
  return (
  <AuthContext.Provider>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider