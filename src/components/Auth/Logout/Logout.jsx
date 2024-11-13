import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {useLogOut} from '../../../contexts/session.context.jsx'
const Logout = () => {
  const {onLogout} = useLogOut()
  onLogout()
  return (
    <Navigate to={'/login'}/>
  )
}

export default Logout