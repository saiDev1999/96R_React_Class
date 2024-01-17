import { Component } from "react";
import ChildButton from "./child";


class Counter extends Component{

    constructor(){
        super()
        this.state={
            count:0

        }

    }

    handleIncrement=(data)=>{
        //setState
        this.setState(
            {
                count:this.state.count+data
            }
        )

    }

    render(){
        return(
            <>
    
            <h3>Counter</h3>
            <h3>{this.state.count}</h3>
            <ChildButton handleIncrementMethod={this.handleIncrement}   />
            </>
        )
    }
}

export default Counter

// construtor : it is a method used to initialize the state and binding the methods

// life cycle methods only available in class based 

// hooks 


// tasks :
// 1. Repeat the class 
// 2. Once research about life cycles methods in class based
// 3. Importance of key prop in  map method 
// 4. how to communicate from child to parent 



