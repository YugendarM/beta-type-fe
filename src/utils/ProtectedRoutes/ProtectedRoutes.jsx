import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {

    const userData = useSelector((state) => state.user)

    const [isLoggedIn, setIsLoggedIn] = useState("false")

    useEffect(() => {
      setIsLoggedIn(userData.isLoggedIn)
    }, [userData.isLoggedIn])

  return isLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoutes
