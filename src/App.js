import { Component } from "react"
import ButtonComponent from "./components /button/button-component"
import ListComponent from "./components /list /list"
import OrderedList from "./components /list /orderedList/ordered-list"





function App (){
  return(
<div>
<h3>app.js</h3>
<ButtonComponent/>
<ListComponent/>





<h3>End of ButtonComponent</h3>





</div>
  )
}

export default App


// task:
// 1. Repeat the class 
// 2. create a table , list , forms , buttons
// 3. Read the document and create your docs 
// 4. Basic commands prepare a docs 












// component : Component is a reusable independent bits of code which is responsible for creating user interface 

// every Component will return html like content we call this as jsx 
// To utilize the component we must export the component 

// in react we have 2 types of components 
// 1. functional components ---> using plain js functions 
// 2. class based components --> using class (object oriented)
