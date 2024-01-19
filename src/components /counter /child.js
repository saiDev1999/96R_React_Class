import { Component } from "react";







class ChildButton extends Component{
    render(){
        return(
            <button onClick={()=>this.props.handleIncrementMethod(5)} >Increment by</button>
        )
    }
}


// const ChildButton =({handleIncrementMethod})=>{
//     return(
//         <button onClick={()=>handleIncrementMethod(5)} >Increment by 1</button>
//     )
// }
export default ChildButton


