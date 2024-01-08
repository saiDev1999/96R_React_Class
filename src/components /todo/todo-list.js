



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
      <li>{listItems[0]}</li>
      <li>{listItems[1]}</li>
      <li>{listItems[2]}</li>
    </ul>
    <button  onClick={()=>{alert("clicked")}}   >Click me</button>
       </div>
    )
}


// class is the predefined keyword in class based component in react so 
// className instead of class
