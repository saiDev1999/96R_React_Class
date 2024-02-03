


import React from "react"

const Child=()=>{
    console.log("Child re-render")
    return(
        <>
        <h3>Good morning</h3>
        </>
    )
}

export default React.memo(Child)