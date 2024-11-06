import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const location = useLocation()
    const token = localStorage.getItem('token')
    if(token){
        return children
    }else{
        return <Navigate to="/login" />
    }
}

export default ProtectedRoutes