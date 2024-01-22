import React,{ useState } from "react"






const UseStateExample2 =()=>{
    const [current,setCurrent]=useState([
        {
            name:"sai",
            salary :100,
            id:1
        },   {
            name:"koushik",
            salary :200,
            id:2
        }
    ])

    const incrementSalary =(data)=>{


   console.log(data)

    }

    const decrementSalary =(data)=>{
        console.log(data)
        
    }


    return(

        <>


        {
            current.map(value=><React.Fragment key={value.id} >
            <h2>{value.name}</h2>
            <h2>{value.salary}</h2>
            <button onClick={()=>incrementSalary(value)} >Increment Salary</button>
            <button onClick={()=>decrementSalary(value)} >Decrement Salary</button>
            
            </React.Fragment>)
        }
        

        
        </>
    )


}

export default UseStateExample2

