import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I have been an achiever throughout my academic career and I wish to use the given opportunities to accomplish the task given to help in the growth of the organization.
                         I build websites with a focus on providing the experience for everyone. Curious to learn more, love problem solving. A responsive design makes your website accessible to all users, regardless of their devices.
                         Hard working, result oriented, can work under pressure and meet deadlines, an analytical thinker and a team player.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS</li>
                                    <li>JavaScript</li>
                                    <li>React-Bootstrap</li>
                                    <li>React Js</li>
                                </Col>
                                <Col md={5}>
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>SQL</li>
                                    <li>JAVA</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage