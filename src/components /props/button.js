



function Button ({children,width,height}){
    const obj={
        text:"Login"
    }

    return(

        <button style={{width:width}} >{children}</button>

    )
}

export default Button

