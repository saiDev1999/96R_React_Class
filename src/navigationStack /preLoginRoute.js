



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from '../screens/preLoginScreens/login-screen'
import InvalidScreen from '../screens/invalidScreen'

function PreLogin() {
  return (
    <Routes>


    <Route path="/" Component={LoginScreen}/>
    <Route path="*" Component={InvalidScreen}    />

 

        </Routes>
  )
}

export default PreLogin