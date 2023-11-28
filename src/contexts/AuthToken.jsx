import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContest = createContext()

function AuthToken({children}) {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    },[isAuth])
    return (
        <>
            <tokenAuthContest.Provider value={{isAuth,setIsAuth}}>{children}</tokenAuthContest.Provider>
        </>
    )
}

export default AuthToken