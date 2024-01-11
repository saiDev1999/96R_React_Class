







function ApiCall (){


    const fetchData =()=>{

        try{

            //loader trigger 
            const a=10
            fetch("https://fakestoreapi.com/products")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
            // console.log(b)

            sucess()




            alert("success")
        }catch(err){
            console.log(err)
            alert("something went wrong ")


        }finally{
              //loader stop 

            console.log("stop the loaders")
            alert("hello")
        }
    }


    const  sucess=()=>{

        try{

        }catch{

        }finally{

        }
    }

    return(
        <>
        <h2>api call</h2>
        <button onClick={fetchData} >Click me to fetch data</button>
        </>
    )
}

export default ApiCall





// Tasks
// 1. Repeat the class 
// 2. Post man installation 
// 3. post test get , post ,put ,delete req 
// 4. 2 api call in react 


