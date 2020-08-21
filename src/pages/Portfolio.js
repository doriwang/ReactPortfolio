import React from "react"
import Projects from "../data/projects.json"
import ProjectCards from "../components/ProjectCards"

function Portfolio() {
    return (
        <ProjectCards Projects={ Projects } />
    )
}

export default Portfolio