import ProfileCard from "./card"

const MapMethod =()=>{


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
        {members.map((details)=><ProfileCard profile={details}  />)}
      
        </>

    )
}

export default MapMethod