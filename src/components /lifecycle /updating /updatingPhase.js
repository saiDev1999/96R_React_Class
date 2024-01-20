import { Component } from "react";












class UpdatePhase extends Component{
 
    constructor(){
        super()
        this.state={
            counter:1,
            color:"red",
            singlePost:{}
        }
    }

    handleClick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }


    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps")

        return{color:props.favColor}

    }

    getSnapshotBeforeUpdate(props,state){
        console.log(state)
        return null
    }

    shouldComponentUpdate(){
        return true
    }

  componentDidUpdate(){
    document.title=`count ${this.state.counter}`
  }



  componentDidMount(){
    document.title=`count ${this.state.counter}`
  }
 



    render(){
        console.log("render")
        return(
            <>
            
            <h1>UpdatePhase</h1>
            <h2 style={{color:this.props.favColor}} >{this.state.counter}</h2>
            <button onClick={this.handleClick} >Increment</button>

            {

                  <h2>{this.state.singlePost?.title}</h2>
            }
            </>
        )
    }
}

export default UpdatePhase

// whenever a state or prop changes component will gets reexecuted or re-render to show the updated data