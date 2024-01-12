import reactImage from "./download.jpeg"



const ProfileCard =(props)=>{
    console.log(props)
    return(
        <div className="card" style={{width:"30%"}}>
        <img className="card-img-top" src={reactImage} alt="Card image" style={{width:"100%"}}/>
        <div className="card-body">
          <h4 className="card-title" style={{color:props.profile.color}} >{props.profile.name}</h4>
          <p className="card-text">{props.profile.designation}</p>
          <p className="card-text">{props.profile.salary}</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    )
}
export default ProfileCard


// tasks:

// 1. Repeat the class
// 2. Using bootstrap table, forms,list use props 
// 3. Using bootstrao and map populate the cards in a row , each row should contain 3 cards
// 4. Create a header and footer 