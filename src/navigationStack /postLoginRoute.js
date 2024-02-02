
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/postLoginScreens/homeScreen'
import SettingScreen from '../screens/postLoginScreens/settingScreen'
import AboutScreen from '../screens/postLoginScreens/aboutScreen'
import ProductsScreen from '../screens/postLoginScreens/productsScreen'
import InvalidScreen from '../screens/invalidScreen'
import ProductDetails from '../screens/postLoginScreens/productDetails'
import context from 'react-bootstrap/esm/AccordionContext'

function PostLogin() {
  return (
    <Routes>


<Route path="/" Component={HomeScreen}    />
    <Route path="/settings" Component={SettingScreen}    />
    <Route path="/about" Component={AboutScreen}    />
    <Route path="/investor-relations" Component={ProductsScreen}    />

    

    <Route path="/productlistview/:id" Component={ProductDetails}/>
    <Route path="*" Component={InvalidScreen}    />
    </Routes>
  
  )
}

export default PostLogin


// tasks :
// 0. Repeat the class (context api , global state management)
// 1. Add employee route , add employees and show in other routing page 
// 3. Product count in home screen , also show total amount 

