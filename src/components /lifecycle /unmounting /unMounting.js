import { Component, PureComponent } from "react";

class Unmounting extends Component{

    constructor(){
        super()
        this.state={
            isVisible:false,
            count:0
        }
    }


    handleVisible=()=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


    render(){
     return(
        <>

        <h2>unmounting {this.state.count}</h2>
        <button onClick={this.handleVisible}  >Click to alter flag</button>
        <button onClick={this.handleIncrement}  >Click to increase count</button>




          <Child/>
      


        </>
     )
    }
}

export default Unmounting




class Child extends PureComponent{


    // componentWillUnmount(){
    //     alert("i am removed from dom")
    // }
    render(){
        console.log("child")
        return(
            <> 
            <h2> i am children</h2>

            <h1>I am visible</h1>
            </>
        )
    }
}




// unmounting phase 


// component will unmount : for clean up purpose , to prevent memory leak 

// drawback :
// child re-rendering when parent state changing 





// Pure component :  component will gets re-render only when state or prop changes 



