



export const TodoList =()=>{

  const details={
    name:"Hedy Lamarr's Todos",
    imageURL:"https://i.imgur.com/yXOvdOSs.jpg",
    imageALT:"Hedy Lamarr",
    listItems:["Invent new traffic lights","Rehearse a movie scene","Improve the spectrum technology"]

  }
//   destructure: unpacking values from array or object into distinct variable 
const {name:sai,imageURL,imageALT:alternateText,listItems}=details
    return(
        <div>
             <h1>{sai}</h1>
    <img 
      src={imageURL}
      alt={alternateText}
      className="photo"
    />
    <ul>
      <li style={{color: !true? "red":"black"}} >{listItems[0]}</li>
      <li>{listItems[1]}</li>
      <li>{listItems[2]}</li>
    </ul>
    <button  onClick={()=>{alert("clicked")}}   >Click me</button>
       </div>
    )
}


// class is the predefined keyword in class based component in react so 
// className instead of class




// tasks :


// 1. Repeat the class 
// 2. Take a container , click to alter the color (dark and light)
// 3. Notes on conditional rendering (conditional opearator and short circuit opearator)
// 4. image alter images 







// login feature 


// internet down , backend mistakes, sever load increase 

// 1. positive case --> right details , proper internet , access the content 
// 2. Negative case -----> right details , internet down --- api will gets failed ---> infinite loading, screen error 

// exceptional handling 


// exception handling is a process or method used for handling the abnormal statements in the code 
// and executing them. 
// .It also enables to handle the flow control of the code/program
//  For handling the code, various handlers are used that process the exception and execute the code.
//   For example, the Division of a non-zero value with zero will result into infinity always, and it is an exception.
//    Thus, with the help of exception handling, it can be executed and handled.



//    8/0 -----> infinity ----> web sites will get froze 

// types of errors 

// 1. syntax errors
// 2. run times errors 
// 3. client side errors 


// 1. Try / catch blocks 
// 2. Try /catch /finally blocks 







































