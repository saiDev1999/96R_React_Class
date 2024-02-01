import { useContext, useEffect,useState } from "react"
import UseEffectEx1, { ProductListing } from "../../components /hooks/useEffect/useEffect1"
import UseEffectEx2 from "../../components /hooks/useEffect/useEffect2"
import UseEffect3 from "../../components /hooks/useEffect/useEffect3"
import Navbar from "../../components /navBar /navBar"
import axios from "axios"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack /navigation"

const HomeScreen = ()=>{
    const[productsListing,setProductListing]=useState([])
    const [totalPrice,setTotalPrice]=useState(null)
    const{darkTheme,changeTheme}=useContext(DataShare)
   useEffect(()=>{
    fetchData()
    console.log("Component mount")
   },[])
   // This function is for fetching the data from server to client 
   const fetchData =()=>{
    //axios
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
        if(response.status===200){
             const newResponse=response.data.map(eachObj=>{
                return {...eachObj,count:1,total:eachObj.price}
             })
            //Successfully data came
            setProductListing(newResponse)
            const result=sumOfPrice(response.data)
            setTotalPrice(result)

        }
    })

   }

    // This function is for calculation of sum of property values
   const sumOfPrice=(arryOfObjects)=>{
    const result=arryOfObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
    return result
  }

  const handleIncrement=(data)=>{

    console.log(data)
    console.log(productsListing)

  }

  const controlTheme=()=>{
    changeTheme()

  }

     
    return(
        <>
        <Navbar/>

        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}  >

             
        </div>
        <button onClick={controlTheme} >ChangeTheme</button>

        
        <h2>I am from home screen</h2>
        <h1>Total value of products : {totalPrice} </h1>


        {
            productsListing.length>0 ? productsListing.map(product=><ProductListingComponent key={product.id} data={product} handleIncrement={handleIncrement}  />)
            :<h1>loading...</h1>
        }

   
        </>
    )
}

export default HomeScreen




export const ProductListingComponent =({data,handleIncrement})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.title} width={100} height={100} />
            <button>Decrement</button>
            <button  onClick={()=>handleIncrement(data)}  >Increment</button>
            <h3>{data.count}</h3>
            <Link to={`/productlistview/${data.id}`} >
            <button>Click to view ProductDetails</button>
            </Link>
            <h3>{data.price}</h3>
        </div>
        </>
    )
}


// tasks: 
// 1. Repeat the class 
// 2. Product details ui  
// 3. axios nd fetch 