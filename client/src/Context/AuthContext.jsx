import React, { createContext, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// create context instance
export const AuthContext = createContext()


// auth provider component

function AuthProvider(props) {
// token
// const [token,setToken] = useState(false) // production state
const [token,setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : false) // dev only
// login status => if login = true, if logout = false
const [login,setLogin] = useState(false) 
// login user info
const [currentUser,setCurrentUser] = useState(false)

 // verify user token
 const verify=  async (token) => {
  await axios.get(`/api/auth/verify/user`, {
     headers: {
      Authorization: `${token}`
     }
  }).then(res => {
      toast.success(res.data.msg)
      setCurrentUser(res.data.user)
      setLogin(true)
  }).catch(err => {
    toast.error(err.response.data.msg)
    setCurrentUser(false)
    setLogin(false)
    setToken(false)
    localStorage.removeItem("token")
  })
}

useEffect(()=> {
  if(token) {
    axios.defaults.headers.common["Authorization"] = token
    verify(token)    
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
},[token])

const contextToken = useMemo(() => ({
  // mount stage => initial state
  token,
  login,
  currentUser
}), [token,login,currentUser])


  return (
    <AuthContext.Provider value={{contextToken, setToken, setLogin,setCurrentUser, verify }}>
            {
                props.children
            }
    </AuthContext.Provider>
  )
}


export default AuthProvider