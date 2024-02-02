import { useContext } from "react"
import Navbar from "../../components /navBar /navBar"
import { DataShare } from "../../navigationStack /navigation"
import UseReducerExample from "../../components /hooks/useReducer/useReducer"






const AboutScreen =()=>{
    const data=useContext(DataShare)
    const {name,darkTheme}=data
    return(
        <>
        <Navbar/>
        <UseReducerExample/>
   
        <h1> i am from about screen</h1>
        <h3> i am managed globally {name}</h3>
        </>
    )
}

export default AboutScreen