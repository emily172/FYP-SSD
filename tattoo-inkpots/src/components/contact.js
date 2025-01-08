import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">Talk with us about your tattoo journey</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={12} md={4}>
              <Form.Control type="text" placeholder="Full Name" required />
            </Col>
            <Col sm={12} md={4}>
              <Form.Control type="email" placeholder="Email Address" required />
            </Col>
            <Col sm={12} md={4}>
              <Form.Control type="tel" placeholder="Contact Number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" rows={5} placeholder="Message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <span>inkpots@tattoo.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>000-000-0000</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>SETU, Cork Road, Waterford, X91 K0EK</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
