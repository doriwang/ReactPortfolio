import React from "react"
import Projects from "../data/projects.json"
import code from "../image/codingResource.png"
import burger from "../image/burger.png"
import directory from "../image/employeeDir.PNG"
import tracker from "../image/employeeTracker.png"
import food from "../image/foodLover.png"
import pwd from "../image/password.png"
import weather from "../image/weatherDashboard.png"
import pwa from "../image/budgetTracker.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "../css/Portfolio.css"

const screenshots = [code, code, food, directory, pwa, burger, tracker, weather, pwd]

const ProjectCards = () => {
    return (
        <div className="portfolio">
            <div className="container project-cards-container">
                <div className="row ">
                    { Projects.map(({ id, name, description, github, demo }, i) => {
                        return (
                            <div className="col s12 m6 l4">
                                <div className="card project-card hoverable" key={ id }>
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="screenShot" src={ screenshots[i] } alt="projects-pic"></img>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{ name }<i className="material-icons right">more_vert</i></span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{ name }<i className="material-icons right">close</i></span>
                                        <p>{ description }</p>
                                    </div>
                                    <div className="card-action">
                                        { github ? <a className="waves-effect waves-light btn-small btn-github"><FontAwesomeIcon icon={ faGithub } size="2x" style={ { paddingTop: 6, paddingRight: 4 } }></FontAwesomeIcon>REPO</a> : null }
                                        { demo ? <a className="waves-effect waves-light btn-small"><img src="https://img.icons8.com/color/26/000000/heroku.png" style={ { paddingTop: 4, paddingRight: 4 } } /><span className="heroku">DEMO</span></a> : null }
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

export default ProjectCards