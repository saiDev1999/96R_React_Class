import axios from "axios"
import { useEffect, useState } from "react"

const UseEffectEx1 =()=>{
  
    const[productsListing,setProductListing]=useState([])

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
        }
    })

   }

     



    return(
        <>
        <h1>useEffect example 1</h1>

        {
            productsListing.length>0 ? productsListing.map(product=><ProductListing key={product.id} data={product}  />)
            :<h1>loading...</h1>
        }
             
        </>

    )
}
export default UseEffectEx1



export const ProductListing =({data})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
        </div>
        </>
    )
}








// syntax : 

// useEffect will accepts 2 args 
// 1. callback function 
// 2. array (dependency array)

// useEffect(callbackFunction,[])



// if dependency array is empty [] ----> component did mount 
// if dependency array is filled with the state or variable  ----> component did update 


// component unmount 


// https request : fetch 

// axios : for effient http req

// axios is faster ,
//  we doesn't need to convert to json , 
//  it will provide additional information about req
//  interceptors will be provided in the axios 



//  token --> 


// tasks :
// 1. Repeat the class 
// 2. Fill the content from api 
// 3. loaders (skeleton or spinners)






