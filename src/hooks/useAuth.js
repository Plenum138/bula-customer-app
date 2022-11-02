import React, { useEffect, useState } from "react"

const useAuth = () => {

    const [isLogin, setIsLogin] = useState('notLoggedIn')
    const isloggedIn = async() => {
       
        setIsLogin('notLoggedIn')
       
    }

    useEffect(() => {
        isloggedIn();
    },[])

 
    return isLogin;
  
   

}

export default useAuth;