import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import ProductsScreen from "../screens/postLoginScreens/productsScreen"
import InvalidScreen from "../screens/invalidScreen"

const NavigationStack =()=>{

    return(
        <BrowserRouter>
        <Routes>
    {/* we have add the routes available in our appilication  */}

    <Route path="/" Component={HomeScreen}    />
    <Route path="/settings" Component={SettingScreen}    />
    <Route path="/about" Component={AboutScreen}    />
    <Route path="/investor-relations" Component={ProductsScreen}    />
    <Route path="*" Component={InvalidScreen}    />

        </Routes>






        </BrowserRouter>



    )
}

export default NavigationStack


// steps :
// 1. Create a component 
// 2. Use BrowserRouter
// 2. Use Routes as a children prop to the BrowserRouter


// post login : 


// 1. Home 
// 2. Products 
// 3. Settings 
// 4. About 



// unprotected routes --> user can able to switch without login by simply changing url 
// protected routes --> user must authenicate to navigate the main screens 

// static routes 

// dynamic routes 



// tasks:
// 1. Repeat the class 
// 2. Fill the content (home screen(header,footer),about , settings, products(cards aligned in row 3))
// 3. what is authenication and authorisation 