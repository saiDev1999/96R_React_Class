import ProfileCard from "./card"

const MapMethod =()=>{


    const members=[
        {
            name:"sai Ganesh",
            id:1,
            designation:"Multi task/CEO",
            color:"red",
            salary:"100k"
        },
        {
            name:"Ashil",
            designation:"All rounder" ,
            id:2,
            color:"green",
            salary:"60k"

        },{
            name:"sameera",
            designation:"Teacher",
            color:"yellow",
            salary:"160k",
            id:3

        }
    

    ]




    return(


        <>
        {members.map((details)=><ProfileCard profile={details} key={details.id} />)}
      
        </>

    )
}

export default MapMethod

// map method :

// every time we use map method we should use key prop 

// key prop enables the identity for each object / value which increases the performance 
// while rendering list 