import UseEffectEx1 from "../../components /hooks/useEffect/useEffect1"
import UseEffectEx2 from "../../components /hooks/useEffect/useEffect2"
import UseEffect3 from "../../components /hooks/useEffect/useEffect3"
import Navbar from "../../components /navBar /navBar"




const HomeScreen = ()=>{
    return(
        <>
        <Navbar/>
        {/* <UseEffectEx1/> */}
        {/* <UseEffectEx2/> */}
        <UseEffect3/>
        
        <h2>I am from home screen</h2>
        </>
    )
}

export default HomeScreen