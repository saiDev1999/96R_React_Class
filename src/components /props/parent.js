import Button from "./button"








const ParentComponent =()=>{
    return(
        <>
        <h2>hello</h2>
        <Button width={"10%"} >
          login
        </Button>
        <Button width={"20%"} >
          login
        </Button>
        <Button width={"30%"} >
          login
        </Button>

        <Receiver>
           <h1>I am the children jsx </h1>
           <h1>I am the children jsx </h1>


        </Receiver>
        </>
    )
}

export default ParentComponent




const Receiver =({children})=>{
    return(
        <>
     
        {children}
        </>

    )
}