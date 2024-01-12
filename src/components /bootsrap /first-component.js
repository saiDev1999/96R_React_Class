import ProfileCard from "./card"
const BootstrapLayout =()=>{

    const members=[
        {
            name:"sai Ganesh",
            designation:"Multi task/CEO",
            color:"red",
            salary:"100k"
        },
        {
            name:"Ashil",
            designation:"All rounder" ,
            color:"green",
            salary:"60k"

        },{
            name:"sameera",
            designation:"Teacher",
            color:"yellow",
            salary:"160k"

        }

    ]
    return(
        <>
   
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Wellcome to react application</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
        <ProfileCard  profile={members[0]} />
        
     
    </div>
    <div className="col-sm-4">
        <ProfileCard profile={members[1]}  />
     
    </div>
    <div className="col-sm-4">
    <ProfileCard profile={members[2]}  />
    
    </div>
  </div>
</div>
</>
    )
}

export default BootstrapLayout




// props : props is an object which is used to pass the data from parent to child 
//  props are nothng but additional information given to components (user defined)
//  props are immutable (we cannot change the data)

//  attribute : additional information given to element (attribute are fixed)