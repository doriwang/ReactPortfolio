import React from "react"
import ProjectCards from "../components/ProjectCards"
import "../css/Portfolio.css"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container project-cards-container">
                <ProjectCards />
            </div>
        </div>
    )
}

export default Portfolio