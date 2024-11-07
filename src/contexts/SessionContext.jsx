import React, { useState } from 'react'
import { createContext } from 'react'

const SessionContext = createContext()

const SessionProvider = ({children}) => {
   const [token, setToken] = useState(localStorage.getItem('token'))

    const onLogout = () => {
       localStorage.clear()
       setToken(null)
    }
    const onLogin = (jwt) => {
      localStorage.setItem('token', jwt)
      setToken(jwt)
    }

    return (
      <>
        <SessionContext.Provider value={{token, onLogin, onLogout}}>
              {children}
        </SessionContext.Provider>
      
      </>
    )
}



export {SessionContext, SessionProvider}