import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Booking() {
  return (
    <section id="booking" className="block booking-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Booking</h2>
          <div className="subtitle">Book a session with us</div>
        </div>
        <Form className='booking-form'>
          <Row>
            <Col sm={12} md={6}>
              <Form.Control type="text" placeholder="Full Name" required />
            </Col>
            <Col sm={12} md={6}>
              <Form.Control type="email" placeholder="Email Address" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Form.Control type="tel" placeholder="Contact Number" required />
            </Col>
            <Col sm={12} md={6}>
              <Form.Control type="date" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" rows={5} placeholder="Describe your tattoo idea" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default Booking;
