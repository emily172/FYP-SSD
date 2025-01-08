import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import studioImage from '../assets/images/tattoo_studio_4.jpg'; // Replace with your image
import studioImage1 from '../assets/images/tattoo_studio_1.jpg'; // Replace with your image
import studioImage2 from '../assets/images/tattoo_studio_2.jpg'; // Add more images
import studioImage3 from '../assets/images/tattoo_studio_3.jpg';

function Studio() {
  return (
    <section id="studio" className="block studio-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Studio</h2>
          <div className="subtitle">Explore our space</div>
        </div>
        <Row>
          <Col sm={12}>
            <Image src={studioImage} fluid />
            <p>Welcome to Inkpots, where art and creativity come to life. Our studio is designed to provide a comfortable and inspiring environment for both our artists and clients. Visit us to experience the magic of tattoo artistry in person.</p>
          </Col>
        </Row>
        <Row className="gallery">
          <Col sm={12} md={4}>
            <Image src={studioImage2} fluid />
          </Col>
          <Col sm={12} md={4}>
            <Image src={studioImage3} fluid />
          </Col>
          <Col sm={12} md={4}>
            <Image src={studioImage1} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Studio;

