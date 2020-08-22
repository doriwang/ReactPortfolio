import React from "react"
import "../css/Portfolio.css"
import code from "../image/codingResource.png"
import burger from "../image/burger.png"
import directory from "../image/employeeDir.PNG"
import tracker from "../image/employeeTracker.png"
import food from "../image/foodLover.png"
import pwd from "../image/password.png"
import weather from "../image/weatherDashboard.png"
import pwa from "../image/budgetTracker.png"

const screenshots = [code, code, food, directory, pwa, burger, tracker, weather, pwd]

function ProjectCards(props) {

    return (
        <div className="portfolio">
            <div className="container cards">
                <div className="row ">
                    { props.Projects.map(({ id, name, description, screenshot }, i) => {
                        console.log(screenshot, typeof screenshot)
                        return (
                            <div className="col s12 m6 l4">
                                <div className="card" key={ id }>
                                    <div className="card-image">
                                        <img src={ screenshots[i] } alt="projects-pic"></img>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                                    </div>

                                    <div className="card-content">
                                        <h5 className="card-title">{ name }</h5>
                                        <p className="card-text">{ description }</p>
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