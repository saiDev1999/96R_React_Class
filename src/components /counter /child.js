import { Component } from "react";







// class ChildButton extends Component{
//     render(){
//         return(
//             <button></button>
//         )
//     }
// }


const ChildButton =({handleIncrementMethod})=>{
    return(
        <button onClick={()=>handleIncrementMethod(5)} >Increment by 1</button>
    )
}
export default ChildButton


