import React, { useState } from 'react';
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';
import { IoAlertCircleOutline  } from 'react-icons/io5'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your Email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

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
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="contact-name">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" name="name" placeholder="John Doe" defaultValue={name} onBlur={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                  <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue={email} onBlur={handleChange}/>
                  </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="message-content">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" name="message" rows={5} defaultValue={message}  onBlur={handleChange} />
                </Form.Group>
                {errorMessage && (
                  <div class="alert alert-danger" role="alert">
                    <IoAlertCircleOutline /> {errorMessage}
                  </div>
                )}
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Contact;