import { useContext } from "react"
import Navbar from "../../components /navBar /navBar"
import { DataShare } from "../../navigationStack /navigation"
import ParentMemo from "../../components /reactMemo/parent"







const SettingScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbar/>
      <ParentMemo/>
        <h1>I am from setting screen </h1>
        </>
    )
}

export default SettingScreen