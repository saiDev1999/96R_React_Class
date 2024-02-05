import { useContext } from "react"
import Navbar from "../../components /navBar /navBar"
import { DataShare } from "../../navigationStack /navigation"
import ParentMemo from "../../components /reactMemo/parent"
import ParentUseMemo from "../../components /hooks/useMemo/ParentUseMemo"
import UseCallbackExample from "../../components /hooks/useCallback/parent"
import { useCounter } from "../../components /hooks/customHooks/useCounter"
import { useOnline } from "../../components /hooks/customHooks/useOnline"







const SettingScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    const[age,incrementAge,decrement]=useCounter(10)
    const [internetStatus]=useOnline()
    return(
        <>
        <Navbar/>

        {
          internetStatus
          ?
          <h1>is online</h1>
          :
          <h2>internet off</h2>
        }

     
        <h1>{age} </h1>
        <button onClick={incrementAge} >Increment age</button>
        <button onClick={decrement} >Decrement</button>
        </>
    )
}

export default SettingScreen




// tasks :

// 1. Design hook for local storage , and 3 other custom hooks
// 2. Use context + use reducer --> global counter 
// 3. code sand box ---> axios call , counter implementation 