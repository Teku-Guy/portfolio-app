import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

function Contact() {

    return (
      <section className="contact-info py-5">
        <div>
          <Container className="cta-contact pt-5 justify-content-center">
            <h1 className="title">Got an App Idea or Unfinished Project?</h1>
            <hr />
            <h2 className="text-center mb-5">
              Let's Get in Touch!
            </h2>
          </Container>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="4" className="justify-content-start">
              <h3>Lets Work Together?</h3>
              <hr className="me-4" />
              <Col md="12">
                <p className="mb-0">
                  Decided to work with me? Or have any questions?
                </p>
                <p className="mb-0">
                  Shoot me and email and I'll be happy to work it out!
                </p>
                <p>
                  I'm always looking to work on new projects or tasks.
                </p>
              </Col>
            </Col>
            <Col md="4">
              <Form>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="contact-name">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                  <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="message-content">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Contact;