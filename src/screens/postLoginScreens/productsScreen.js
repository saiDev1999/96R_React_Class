import { useContext } from "react"
import Navbar from "../../components /navBar /navBar"
import { DataShare } from "../../navigationStack /navigation"




const ProductsScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    
    return(
        <>
        <Navbar/>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}  >

             
</div>
        <h1>i AM from products screen</h1>
        </>
    )
}

export default ProductsScreen