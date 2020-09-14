import React from "react"
import { Row, Card, Col } from "react-materialize"
import "../css/About.css"

const About = () => {
    return (
        <div className="about">
            <div className="container about-content">
                <Row>
                    <Col l={ 10 } s={ 12 } offset="l1">
                        <Card className="about-cards" title="SUMMARY">
                            <p>Dedicated and creative MERN stack web developer with business background. A detail-oriented and adaptable perfectionist adept at problem solving. A self-disciplined go-getter with a positive attitude looking for an employment opportunity to grow and make a difference.</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col l={ 10 } s={ 12 } offset="l1">
                        <Card className="about-cards" title="TECHNICAL SKILLS">
                            <p><span className="strong">Frontend:</span> HTML5, CSS3, Bootstrap, Materialize, JavaScript ES6, JSON, jQuery, React.js
                            <br /><span className="strong">Backend:</span> RESTful API, Node.js, Express.js, MySQL, MongoDB, Mongoose</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col l={ 10 } s={ 12 } offset="l1">
                        <Card className="about-cards" title="CAREER OVERVIEW ">
                            <div>
                                <h6><span className="strong">Fresh perspective Cleaning Services LLC
                                    <br />Business Owner</span><span className="float-right">2015 - Present</span>
                                </h6>
                                <ul>
                                    <li>58% revenue increase from 2018 to 2019</li>
                                    <li>Efficiently manage business through QuickBooks and Excel</li>
                                    <li>Perform a variety of detailed interior duties on a contractual basis for clients</li>
                                    <li>Build and maintain customer profiles, contributing to a positive customer service experience</li>
                                </ul>
                                <h6><span className="strong">Professional Tennis Instructor</span><span className="float-right">2010 - Present</span></h6>
                                <ul>
                                    <li>Develop customized lessons, teach technical skills and motivate students</li>
                                    <li>Ensure excellent client experience</li>
                                    <li>Effective communicator and highly professional</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col l={ 10 } s={ 12 } offset="l1">
                        <Card className="about-cards" title="EDUCATION">
                            <ul><span className="strong">University of Denver Coding Bootcamp, Denver, CO</span><br />Full Stack Developer Certification<span className="float-right"
                            >September, 2020</span></ul>
                            <ul><span className="strong">Arapahoe Community College, Littleton, CO</span><br />Associate of Applied Science Degree in Accounting<span className="float-right"
                            >May, 2018</span></ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About