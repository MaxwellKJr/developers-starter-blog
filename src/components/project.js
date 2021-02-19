import React from "react"
import "./css/project.css"

const Project = () => {
  const state = [
    {
      pID: 1,
      name: "Floss's Clothing",
      imageURL: "https://www.udrop.com/file/4Yd9/flossysclothing.png",
      projectURL: "https://flossysclothing.web.app",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      pID: 2,
      name: "SpeedLight Tech",
      imageURL: "https://www.udrop.com/file/4Ydb/slt.png",
      projectURL: "https://speedlighttech.netlify.app",
      tags: ["HTML", "CSS", "JavaScript", "Materialize"],
    },

    {
      pID: 3,
      name: "Gamer Girl 44",
      imageURL: "https://www.udrop.com/file/4Ydc/speedlight.png",
      projectURL: "https://gamergirl44.netlify.app",
      tags: ["React", "GatsbyJS", "Blog"],
    },
    {
      pID: 4,
      name: "Toxic Arts",
      imageURL: "https://www.udrop.com/file/4Yda/toxicart.png",
      projectURL: "toxicarts.netlify.app",
      tags: ["HTML", "CSS"],
    },
    {
      pID: 5,
      name: "#BecomingCrimson",
      imageURL: "https://www.udrop.com/file/4Ydd/crimsons.png",
      projectURL: "becomingcrimson.netlify.app",
      tags: ["HTML", "CSS"],
    },
  ]

  const imageLinks = [
    "https://www.udrop.com/file/4Yd9/flossysclothing.png",
    "https://www.udrop.com/file/4Yda/toxicart.png",
    "https://www.udrop.com/file/4Ydb/slt.png",
    "https://www.udrop.com/file/4Ydc/speedlight.png",
    "https://www.udrop.com/file/4Ydd/crimsons.png",
  ]

  return (
    <div className="projects">
      {state.map(project => {
        return (
          <div className="project" key={project.pID} title={project.name}>
            <a
              href={project.projectURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageURL}
                alt={project.name}
                className="project-img responsive-img"
              />
            </a>
            <div className="project-details">
              <ul className="tags">
                {project.tags.map(tag => (
                  <li className="tag">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
