import ListComponent from "./components /list /list"
import OrderedList from "./components /list /orderedList/ordered-list"
import Heading,{HeadingComponent2 as SaiGanesh,HeadingComponent3 as Koushik } from "./components /heading/headings"
import { Greeting } from "./components /greeting/greeting"
import { TodoList } from "./components /todo/todo-list"
import ButtonComponent from "./components /classBased/button-component"
import ApiCall from "./components /exceptionalHandling/api-call"
import InlineStyles from "./components /styling/inline-styles"
import ExternalStyles from "./components /styling/external-styling"
import ModuleStlyles from "./components /styling/module-styles"
import BootstrapLayout from "./components /bootsrap /first-component"
import MapMethod from "./components /bootsrap /mapMethod"

function App (){
  return(
<div>

{/* <BootstrapLayout/> */}
<MapMethod/>



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








// 2011
// React : 2013 



// 2 componnents 
// 1. functional components ---> only static or presentational layer 
// 2. class based components  ---> used for creating a functional layer


// 2018  react 16.8 version ----> hooks 


// 1. functional components ---> used for creating a functional layer  ---> data layer 
// 2. class based components  ---> used for creating a functional layer


// react data layer 

// 1. state and props 



// state : it is an object which holds the component data or infomation in a private manner 

// class based components


// creating a state in a class based components
// 1. Object way of creation
// 2. Constructor way 


// to change the state or data in  in class based component
// setState 
// setState --> it will accept 2 args 
// 1arg ---> object ---> we will change the state here 
// 2arg ---> callback function ----> we can check the state change 



// Team team suggesting only to use functional 
// cla




// Virtaul dom 
//  1. Diffing -----> compare the previous state and current (something changed)
//  2. Reconcilation ----> it will update the particular ---> only at the button without disturbing other parts of ui 



// how to apply styles to react application

// 1.Inline styling 
// 2. External css styling
// 3. External module css styling  
// 4. Styled components or sass type of styling (boostrap,tailwind css, material ui,ant design )





// 2 ways external styled componenyts  boostrap

// 1. CDN 
// 2. NPM (node package manager)

// bootsratp installation :
// 1. Using npm install react bootstrap and bootstarp 
// 2.import the css style sheet to apply the boostrap styles (app.js or index.js)








