import React from "react"
import code from "../image/codingResource.png"
import burger from "../image/burger.png"
import dir from "../image/employeeDir.PNG"
import tracker from "../image/employeeTracker.png"
import food from "../image/foodLover.png"
import pwd from "../image/password.png"
import weather from "../image/weatherDashboard.png"
// import code from "../image/codingResource.png"
// import code from "../image/codingResource.png"

const screenshots = [code, burger, dir, tracker, food, pwd, weather]

function ProjectCards(props) {

    return (
        <div className="container">
            { props.Projects.map(({ id, name, description, screenshot }, i) => {
                console.log(screenshot, typeof screenshot)
                return (
                    <div className="card" key={ id }>
                        <div className="row no-gutters">
                            <div className="col-sm-5">
                                <img className="card-img" src={ screenshots[i] } alt="Suresh Dasari Card"></img>
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">{ name }</h5>
                                    <p className="card-text">{ description }</p>
                                    <a href="#" className="btn btn-primary">View Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default ProjectCards