import { useState } from "react"


const UseStateExample =()=>{

    // counter : 
    // display the initial value 
    // update the value by clicking the button

    const initialValue=100

const[count,setCount]=useState(initialValue)
const [timer,setTimer]=useState(initialValue)

const handleIncrement =()=>{
    setCount(count+1)

}


const handleTimer=()=>{


    setInterval(()=>{

 
     

        if(timer===0){
            alert("timeUp")
        }else{
            setTimer(timer=>timer-1)

        }

    },1000)

    // timing events :
    // setInterval runs evry interval of times 
    // setTimeout runs once after given time

}



    return(
        <>
        <h2>useState example  {count}</h2>
        <h2  style={{color:timer>50?"black":"red"}} > timer -- {timer}</h2>
        <button onClick={handleIncrement} >Click to increment</button>
        <button onClick={handleTimer} >Click to start exam</button>
        </>
    )
}

export default UseStateExample

// useState : to create a state and manage a state in functional based components 

// class based :
// 1. constructor state creation 
// 2. using setstate we can manage(mutuate) the state 


// useState syntax :

// 1. it will accept the initial value (strings, number , boolean, arrays)

// useState(false)

// 2. it will return an array 

// const newVariable = useState(false)

// 3. array will consists of current value and a function 

// const [Value,updaterFunction]=useState(initial value)

// value ----> current value of state
// updaterFunction ---> we can change the state 





// tasks :
// 1. useState with different data types (strings,boolean,array of objects)
// 2. stop timer when timer is 0 
// 3. push the code (git)

