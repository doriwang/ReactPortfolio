import React from "react"
import { Link } from "react-router-dom"
import bioPic from "../image/bio-img.JPG"
// import projects from "../data/projects.json"
import "../css/NavBar.css"

const styles = {
    bio: {
        height: 80,
        width: 80,
        borderRadius: 50
    }
}

function NavBar() {

    return (
        <nav className="navbar navbar-expand">
            <div className="container">
                <li className="navbar-brand">
                    <img className="nav-logo" src={ bioPic } alt="bio-pic" style={ styles.bio }></img>
                </li>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className={ "nav-link" }>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={ "nav-link" }>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={ "nav-link" }>Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar