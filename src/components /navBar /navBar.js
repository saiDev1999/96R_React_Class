import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack /navigation"








const Navbar =()=>{
   

   const sharedContext=useContext(DataShare)
   console.log(sharedContext)
   const{name}=sharedContext

   
    const link={
        textDecoration:"none",color:"black"

    }
    const listStyle={
        margin:7
    }
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={listStyle} >
             <Link to="/"style={link} >{name}</Link>
            </li>
           <li className="nav-item" style={listStyle}  >
           <Link to="/settings" style={link} >Settings</Link>

    
            </li>
            <li className="nav-item" style={listStyle}  >
            <Link to="/about" style={link} >About</Link>

            </li>
            <li className="nav-item" style={listStyle} >
            <Link to="/investor-relations" style={link} >Products</Link>
   
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar

