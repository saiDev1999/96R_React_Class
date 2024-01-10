import React from "react"




const ListItems =()=>{

    return (
        <React.Fragment>
             <li>apple</li>
            <li>kiwi</li>
            <li>banana</li>
            <li>mango</li>
            <li>grapes</li>


        </React.Fragment>
    )
}

export default ListItems


// React fragments : its a empty container which acts like a shared parent 
//optimization 
// <></>