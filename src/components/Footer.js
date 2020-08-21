import React from "react"
import profile from "../data/profile.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../css/Footer.css"

const { github, email, linkedIn, phone } = profile
const style = {
    icon: {
        color: "#40E0D0",
        paddingRight: 15
    }
}

const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <div className="container footer">
                <div className="elements">
                    <a href={ github } target="_blink" >
                        <FontAwesomeIcon icon={ faGithub } size="3x" style={ style.icon } />
                    </a>
                    <a href={ linkedIn } target="_blink">
                        <FontAwesomeIcon icon={ faLinkedin } size="3x" style={ style.icon } />
                    </a>
                    <p className="contact"><strong>Email:</strong>
                        <a className="email" href="mailto:dori.wyj@gmail.com" >{ email }</a><span ><strong
                        >Phone:</strong></span><span className="phone">{ phone }</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer