import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import scorepanel from '../../Assets/score1.jpeg'
import musicimage from '../../Assets/music.jpeg'
import neophoto from '../../Assets/neophoto.jpeg'
import portfolio from '../../Assets/portfolio.jpeg'
import friends from '../../Assets/frndsbk.jpeg'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={scorepanel}
                isBlog={false}
                title="Scoreboard Panel"
                description="Scoreboard pannel created with HTML,CSS,JavaScript, to build this entire application. This application consists of title ICIC 2011 with six different column & each players details according to the row,created with HTML,CSS,JavaScript, to build this entire application."
                ghLink="https://github.com/Harsini123/scoreboard"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={musicimage}
                isBlog={false}
                title="Music-Home"
                description="Music-Home builds with HTML,CSS,JavaScript using API keys fetched as a backend.Music-Home is a potential classified music listening website/app that categorizes in a user-friendly manner & displays the songs.Different icons for different musicians given and all are linked succesfully in the home page."
                ghLink="https://github.com/Harsini123/music-home"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={neophoto}
                isBlog={false}
                title="Neo-photography"
                description="This project is a simplified website of Photography. It was created with HTML,CSS.Users can click  images with embedded Captions  or related content about the photo from view more. I included nightlight photography, city photography and other most famous photographies of streets,cities,etc.It was created with HTML,CSS.it is user friendly and easy to access"
                ghLink="https://github.com/Harsini123/neo-photography"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Portfolio"
                description="Portfolio is a  webpage built with HTML, CSS, and JavaScript. Users can view my profile.about me. They can also contact me through it."
                ghLink="https://github.com/Harsini123/portfolio"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={friends}
                isBlog={false}
                title="Friends Book"
                description="Friends Book  is a  website completely build with HTML & CSS with fully responsive."
                ghLink="https://github.com/Harsini123/friends-book"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. "
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist