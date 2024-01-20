import { Component } from "react";
import Loader from "../../loaders/loader";







class Mouting extends Component{
    constructor(){

        console.log("constructor")
        super()
        this.state={
            message:"good morning",
            color:"red",
            posts:[]

        }
    }

    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps")
        return {color:props.color}
    }

    componentDidMount(){

        console.log("componentDidMount")
        // only once in a life cycle 
        // dom manupulation
        // document.title="Flipkart"  
        
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(response=>{

           this.setState(
            {
                posts:response
            }
           )
 

        })
    }


    render(){
        console.log("render",this.state.posts)
        return(
            <>
            <h2 style={{color:this.state.color}}  >Mounting {this.state.message}</h2>

            {

                this.state.posts.length>0
                ?
                <>
              {
                this.state.posts.map((eachPost)=> <>

                <h2>{eachPost.title}</h2>
                     <h2>{eachPost.id}</h2>
                     </>
                )
              }
                </>
                :
          <Loader/>

            }


            
            </>
        )
    }
}

export default Mouting

// getDerivedStateFromProps : 



// component did mount : auto excute method 


// side effects:
// api calls , document manipulation ,timers , subscribtions 

