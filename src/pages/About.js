import React from "react"
import { Card } from "react-materialize"
import "../css/About.css"

const About = () => {
    return (
        <div className="about">
            <div className="container about-container">
                <Card className="about-cards col l8 s12">
                    <h5>SUMMARY</h5>
                    <p>MERN stack. Motivated and creative full stack web developer with business background. Professional, detail-oriented, adaptable, and a forward-thinker with a go-getter, positive attitude adept at problem solving.</p>
                </Card>
                <Card className="about-cards">
                    <h5>TECHNICAL SKILLS</h5>
                    <p>Frontend: HTML5, CSS3, Bootstrap, Materialize, handlebars, JavaScript, jQuery, React<br />Backend: Node.js, Express.js, MongoDB, MySQL </p>
                </Card>
                <Card className="about-cards">
                    <h5>EXPERIENCE</h5>
                    <div>Fresh perspective Cleaning Services LLC<br />Business Owner<span>2015 - Present</span>
                        <ul>
                            <li>Self-disciplined entrepreneur</li>
                            <li>Efficiently manage business through QuickBooks and Excel</li>
                            <li>Perform a variety of detailed interior duties on a contractual basis for clients</li>
                            <li>Excellent customer service skills </li>
                        </ul>
                        Professional Tennis Instructor<span>2010 - Present</span>
                        <ul>
                            <li>Develop customized lessons, teach technical skills and motivate students</li>
                            <li>Ensure excellent client experience</li>
                            <li>Effective communicator and highly professional</li>
                        </ul>
                    </div>
                </Card>
                <Card className="about-cards">
                    <h5>EDUCATION</h5>
                    <ul>University of Denver Coding Bootcamp, Denver, CO<br />Full Stack Developer Certification<span
                    >September, 2020</span></ul>
                    <ul>Arapahoe Community College, Littleton, CO<br />Associate of Applied Science Degree in Accounting<span
                    >May, 2018</span></ul>
                </Card>
            </div>
        </div>
    )
}

export default About