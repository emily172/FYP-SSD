import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Inkpots gave me the best tattoo experience! The artists are incredibly talented and professional.',
    designation: 'Client'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'I love my new tattoo! The attention to detail and care taken during the process was amazing.',
    designation: 'Client'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'The artists at Inkpots are true professionals. They really listened to my ideas and brought them to life.',
    designation: 'Client'
  }
];

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">What our clients say about us</div>
        </div>
        <Carousel controls={false} indicators={false} interval={3000} pause={false}>
          {
            testimonialsData.map(testimonial => (
              <Carousel.Item key={testimonial.id}>
                <blockquote>
                  <p>{testimonial.description}</p>
                  <cite>
                    <span className='name'>{testimonial.name}</span>
                    <span className='designation'>{testimonial.designation}</span>
                  </cite>
                </blockquote>             
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;
