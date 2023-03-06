import React from "react"
const person={
    name:"Gregorio Y. Zara",
    imageUrl:"https://i.imgur.com/MK3eW3Am.jpg",
    theme:{
        backgroundColor:"white",
        color:"pink",
    }
}
export default function Profile() {
    return (
        <div style={person.theme} >
            <h1>{person.name}'s Todos</h1>
            <img className="avtar" src={person.imageUrl} alt={person.name}></img>
            <ul>
                <li>improve the videophone</li>
                <li>work on alchoal fuiled engine</li>
            </ul>
        </div>
    )
  }

