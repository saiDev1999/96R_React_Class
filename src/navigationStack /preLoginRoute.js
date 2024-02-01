



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from '../screens/preLoginScreens/login-screen'

function PreLogin() {
  return (
    <Routes>


    <Route path="/" Component={LoginScreen}/>

 

        </Routes>
  )
}

export default PreLogin