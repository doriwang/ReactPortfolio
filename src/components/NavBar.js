import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import bioPic from "../image/bio-img.JPG"
// import projects from "../data/projects.json"
import "../css/Navbar.css"
import M from "materialize-css"

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="nav-wrapper container">
                        <div className="brand-logo"><img id="logo" src={ bioPic } alt="bio"></img><span id="name">Dori Wang</span></div>
                        <a href=" " data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navbar