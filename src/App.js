import NavigationStack from "./navigationStack /navigation"

function App (){
  const greenColor="green"
  return(
<div>
  <NavigationStack/>

</div>
  )
}

export default App


// task:
// 1. Repeat the class 
// 2. create a table , list , forms , buttons
// 3. Read the document and create your docs 
// 4. Basic commands prepare a docs 





// tasks :
// 1. Repeat the class 
// 2. Apply styling and show cards (row 3 or 4 cards) with add to cart button 










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




// human life cycle :

// 1. born stage 
// 2. survival stage 
// 3. expiry stage 

// main character : human 
// place : earth 



// Life cycle of a component 

// 1. Creation of component (mounting phase)

// 2. updating stage (updating phase)
// 3. expiry strage (unmounting phase)

// main character : component 
// place : dom 




// Mounting phase : creation of elements and inserting in the dom we can call as mounting phase 


// 4 methods :


// 1. Constructor method
// 2. Render method 
// 3. getDerivedStateFromProps
// 4. Component did mount 



// Updating phase :
// 5 methods

// 1. render 
// 2. getDerivedStateFromProps // rarely 
// 4. getSnapShotBeforeUpdate 
// 5. component should update  // it will decide component has to update or not 
// 3. component did update  // side effects in update phase 

// Unmounting :

// 1. Component will unmount // clean up purpose 



// class based components :

// 1. always we should this keyword for data and method binding 
// 2. State updating we need setState method 
// 3. code splitted in to multiple methods to perform a task (dom tiltle updation)
// 4. life cycles methods hard to understand 



// presentational layer : static ui layer 

// functional layer or container layer or data layer : dynamic data ui layer 


// 2018 : 16.8 version react introduced hooks concept in functional based components 


// hooks : functional based both presentational and container layer 


// hooks : hooks let you use of state and other react features(life cycle methods ) without writing a class based 
// components 

// examples of hooks :

// 1. useState : using useState we can create the state in functional based components 
// 2. useEffect 
// 3. useMemo 
// 4. useCallback 
// 5. useReducer 
// 6. useContext
// 7. custom hooks ()

// * hooks will always start with use keyword 

// * hooks :

// 1. predefined hooks 
// 2. custom hooks (user specific hoook based on the requirements) ex: useFetch 

// rules of hooks 

// 1. we must use only in functional based components 
// 2. hooks must be call at the top of the components 
// 3. hooks cannot be conditional 
// 4. always import the hooks while using 

// if(true){
//   useState 
// }


// Routing : Navigation between pages in the application we can call it as Routing 

// React doesn't provide the routing coz its only focus on the ui 

// to provide routing in react application we use React-router-dom 


















