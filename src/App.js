import ButtonComponent from "./components /button/button-component"
import ListComponent from "./components /list /list"
import OrderedList from "./components /list /orderedList/ordered-list"
import Heading,{HeadingComponent2 as SaiGanesh,HeadingComponent3 as Koushik } from "./components /heading/headings"
import { Greeting } from "./components /greeting/greeting"
import { TodoList } from "./components /todo/todo-list"

function App (){
  return(
<div>
  <Greeting></Greeting>
  <TodoList/>


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






// ways to export the component 

// 1. Default export :

// each module can have only one default export 

// we can import with any name in the destinated component

// We can import directly 




// 2. Named export 

// each module can have as many named exports 

// we can import with any name only if we use as while importing 

// we should use curly braces while importing multiple name exports 





// JSX :

// it is simpply a language extension for javascript code where we can add markup (html) inside our .js file 
// we can write both js and html in a same file with out any separation 


// Rules of jsx 

// 1. Every component must return single parent 