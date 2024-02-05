import { useCallback, useState } from "react"
import TextComponent from "./text"
import ButtonComponent from "./button"







const UseCallbackExample=()=>{
 const[age,setAge]=useState(100)
 const[salary,setSalary]=useState(10000)

 const ageIncrement=useCallback(()=>{
    setAge(age+10)
 },[age])

 const salaryIncrement=useCallback(()=>{
    setSalary(salary+1000)
 },[salary])


    return(
        <>
        <TextComponent  text={age}  />
        <ButtonComponent handleChange={ageIncrement} title="Increment age"   />
        <TextComponent  text={salary}  />
        <ButtonComponent  handleChange={salaryIncrement} title="Increment salary"   />
        

        </>
    )
}

export default UseCallbackExample




// useCallback --->  
// accepts 2 args :
// 1. Callback function which has to be memorize 
// 2. Dependency array 