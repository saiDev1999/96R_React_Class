import { useContext } from "react"
import Navbar from "../../components /navBar /navBar"
import { DataShare } from "../../navigationStack /navigation"
import ParentMemo from "../../components /reactMemo/parent"
import ParentUseMemo from "../../components /hooks/useMemo/ParentUseMemo"







const SettingScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbar/>
      {/* <ParentMemo/> */}
      <ParentUseMemo/>
        <h1>I am from setting screen </h1>
        </>
    )
}

export default SettingScreen