import React from "react"

const Project = () => {
  const state = {
    name: "Maxwell Kapezi",
    age: 20,
    occupations: ["Programmer", "Writer", "Gamer"],
  }

  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.age}</p>
      <ul>
        <li>{state.occupations}</li>
      </ul>
    </div>
  )
}

export default Project
