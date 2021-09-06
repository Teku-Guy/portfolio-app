import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import profille from '../../assets/images/gm.jpg'

function About() {

    return (
        <section className="about pt-5 cta">
          <div className="">
          <Container>
            <Row>
              <Col className="md-6 title">
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
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <article className="mb-5">
                    <p>Hello! My name is Gustavo Muratalla Jr. Or you can call me Goose or Gus for short. I been coding for a solid 5 years. Started in when I was a frehsman in HighSchool I took AP Computer Science my Sophmore year and ever since then i been coding in Java. From their I decide to expand my knoweldge and been programing in C#, C++, JavaScript, and Python. I also have dabled with some other frame works like Laravel, ReactJs, and Jekyll. Feel Free to check out my projects on my github, or linkedin below...</p>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
    );
}

export default About;