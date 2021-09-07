import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import profille from '../../assets/images/gm.jpg'

function About() {

    return (
        <section className="about">
          <div className="cta pt-5 blur">
            <Container >
              <Row>
                <Col className="md-6 title-i">
                  <h1 className="text-end">Gustavo Muratalla</h1>
                  <h2 className="text-end">Developer // Musician</h2>
                </Col>
                <Col className="md-6">
                  <img src={profille} alt="Profile of Gustavo Muratalla" className="profile-image"/>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="about-section" className="pt-5">
            <Container fluid="xl">
              <Row className="justify-content-center">
                <Col>
                  <article className="mb-5">
                    <h2 className="article-header">Breif History . . .</h2>
                    <hr/>
                    <p>
                      Hello! My name is Gustavo Muratalla Jr. I been coding for a solid 5-6 years. I disembarked on my coding journey 
                      when I was an incomming Frehsman in Dos Pueblos High School. I was inspired by a neighboorhood friend to pick up 
                      coding since I had developed a passion for computers. I started out taking the "Intro to Computer Science" course 
                      first to see what I could learn but after a the first semester I found that my knoweldge and skills where already t
                      o advance for the class but my teacher recommended me to finish the course and get the credits. So I followed 
                      through. 
                    </p>
                    <p>
                      In my Sophmore year of High School I had decided to take the "AP Computer Science" and ever since then, I fell in love
                      with coding. Even thought this course focused on programing language Java. I learn most of the major concepts of "OOP" 
                      ( or Object Orient Programming). From their I decide to expand my knoweldge and been learning how to program in C#, C++, 
                      JavaScript, Python, and a bunch of other Programming Languages. 
                      I also have dabled with some other frame works like Laravel, ReactJs, Handlerbars and Jekyll. Feel Free to check out my projects 
                      on <a className="link-light" href="https://github.com/teku-guy"  rel="noreferrer" target="_blank"> my github.</a>
                    </p>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
    );
}

export default About;