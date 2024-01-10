import { Component } from "react";
import { TodoList } from "../todo/todo-list";
import OrderedList from "../list /orderedList/ordered-list";


class ButtonComponent extends Component{
   ///Object way of creating a state in class based components
    state={
        subscribeText1:"Subscribe",
        isSubscribed:false,
        subscribeText2:"Subscribed Thanks"

    }

    handleSubscibe = ()=>{
        // alert("button clicked")
    this.setState(
        {

            isSubscribed:!this.state.isSubscribed,


        },()=>{

            console.log(this.state.isSubscribed)
        }
    )
    }


    render(){
        return(
          <>

    
            <button onClick={this.handleSubscibe} >{this.state.isSubscribed?this.state.subscribeText2:this.state.subscribeText1}</button>


        {


          this.state.isSubscribed
          ?
          <>

          <h2>Thanks for Subscribing , explore more</h2>
          <TodoList/>
          <OrderedList/>
          </>
          :
          <>

          <h2>Please Subscribe to access the app content</h2>
       
          </>

        }


            </>
        )
    }
}

export default ButtonComponent