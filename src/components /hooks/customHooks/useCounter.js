import { useState } from "react"









export const useCounter =(initialCount,value=1)=>{

   const [count,setCount]=useState(initialCount)

    const incrementCount=()=>{
        setCount(count+value)
    }
    const decrementCount=()=>{
        setCount(count-value)
    }
    return[count,incrementCount,decrementCount]
}