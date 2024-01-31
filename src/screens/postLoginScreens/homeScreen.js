import { useEffect,useState } from "react"
import UseEffectEx1, { ProductListing } from "../../components /hooks/useEffect/useEffect1"
import UseEffectEx2 from "../../components /hooks/useEffect/useEffect2"
import UseEffect3 from "../../components /hooks/useEffect/useEffect3"
import Navbar from "../../components /navBar /navBar"
import axios from "axios"
import { Link } from "react-router-dom"

const HomeScreen = ()=>{
    const[productsListing,setProductListing]=useState([])
    const [totalPrice,setTotalPrice]=useState(null)
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
            //Successfully data came
            setProductListing(response.data)
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

     
    return(
        <>
        <Navbar/>

        
        <h2>I am from home screen</h2>
        <h1>Total value of products : {totalPrice} </h1>


        {
            productsListing.length>0 ? productsListing.map(product=><ProductListingComponent key={product.id} data={product}  />)
            :<h1>loading...</h1>
        }

   
        </>
    )
}

export default HomeScreen




export const ProductListingComponent =({data})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.title} width={100} height={100} />
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