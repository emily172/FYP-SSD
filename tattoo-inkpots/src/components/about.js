import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaPaintBrush, FaHeart, FaShieldAlt, FaGem, FaMedal, FaHandsHelping } from 'react-icons/fa';


import img1 from '../assets/images/about.jpg'; // Keep the same image name for now

function AppAbout() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Inkpots</h2>
          <div className="subtitle">Learn more about our studio</div>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <Image src={img1} fluid />
          </Col>
          <Col sm={12} md={6}>
            <p>Welcome to Inkpots, a premier tattoo studio where art and creativity come to life. Our mission is to provide our clients with unique and custom tattoo designs that express their individuality and tell their stories.</p>
            <p>Our experienced and talented artists specialize in various tattoo styles, ensuring that each piece is a masterpiece. Whether you're looking for a traditional tattoo or a modern design, we've got you covered.</p>
            <div className="services-overview">
              <h4>Our Services</h4>
              <p>At Inkpots, we offer a wide range of services to cater to your unique preferences and needs:</p>
              <ul>
                <li>Custom Tattoo Designs</li>
                <li>Cover-Up Tattoos</li>
                <li>Client Journeys</li>
                <li>Tattoo Aftercare</li>
                <li>Consultations</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="client-quote">
          <Col sm={12}>
            <blockquote>
              "Inkpots provided me with an amazing experience. The artists are incredibly talented and professional. My tattoo turned out even better than I imagined!"
              <footer>- Satisfied Client</footer>
            </blockquote>
          </Col>
        </Row>
        <div className="highlights">
          <h4>Why Choose Us?</h4>
          <Row>
            <Col sm={12} md={6}>
              <ul>
                <li>
                  <FaPaintBrush className="icon" />
                  <div>
                    <strong>Experienced and Local Talented Artists</strong>
                    <p>Our team consists of highly skilled artists with many years of experience in the industry.</p>
                  </div>
                </li>
                <li>
                  <FaGem className="icon" />
                  <div>
                    <strong>Custom and Unique Tattoo Designs</strong>
                    <p>We create all our designs tailored to each client's vision and preferences.</p>
                  </div>
                </li>
                <li>
                  <FaShieldAlt className="icon" />
                  <div>
                    <strong>Comfortable and Hygienic Environment</strong>
                    <p>Our studio follows strict hygiene protocols to ensure a safe and clean experience.</p>
                  </div>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <ul>
                <li>
                  <FaHeart className="icon" />
                  <div>
                    <strong>Cover-up Services</strong>
                    <p>We offer expert cover-up tattoo services with a focus on precision and customization.</p>
                  </div>
                </li>
                <li>
                  <FaHandsHelping className="icon" />
                  <div>
                    <strong>Personalized Aftercare Support</strong>
                    <p>We provide comprehensive aftercare instructions to ensure proper healing.</p>
                  </div>
                </li>
                <li>
                  <FaMedal className="icon" />
                  <div>
                    <strong>International Recognition and Awards</strong>
                    <p>Our studio has earned numerous accolades for its exceptional work and dedication to the craft.</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default AppAbout;
