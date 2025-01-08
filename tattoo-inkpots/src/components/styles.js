import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const stylesData = [
  {
    id: 1,
    image: require('../assets/images/trad_tat.jpeg'), // Keep the image name as img6.jpg
    title: 'Traditional Tattoos',
    description: 'Classic tattoo designs with bold lines and vibrant colors.'
  },
  {
    id: 2,
    image: require('../assets/images/realisim_tat.jpeg'), // Keep the image name as img7.jpg
    title: 'Realism',
    description: 'Highly detailed and realistic tattoo designs.'
  },
  {
    id: 3,
    image: require('../assets/images/neo_trad_tat_1.jpg'), // Keep the image name as img8.jpg
    title: 'Neo-Traditional Tattoos',
    description: 'A modern take on traditional tattoos with more depth and details.'
  },
  {
    id: 4,
    image: require('../assets/images/water_tat.jpeg'), // Keep the image name as img9.jpg
    title: 'Watercolor Tattoos',
    description: 'Soft, flowing designs that mimic the look of watercolor paintings.'
  },
  {
    id: 5,
    image: require('../assets/images/black_work_tat.jpeg'), // Keep the image name as img10.jpg
    title: 'Blackwork Tattoos',
    description: 'Bold designs created entirely with solid black ink.'
  },
  {
    id: 6,
    image: require('../assets/images/gem_tat.jpg'), // Keep the image name as img11.jpg
    title: 'Geometric Tattoos',
    description: 'Intricate designs using geometric shapes and patterns.'
  },
  {
    id: 7,
    image: require('../assets/images/dot_tat.jpg'), // Keep the image name as img12.jpg
    title: 'Dotwork Tattoos',
    description: 'Designs created using dots to build up shading and detail.'
  },
  
    {
      id: 8,
      image: require('../assets/images/mirco_tat.jpg'), // Keep the image name as img13.jpg
      title: 'Micro Realism',
      description: 'Detailed and realistic designs, capturing the essence of micro realism in tattoo artistry.'
    },
    
  {
    id: 9,
    image: require('../assets/images/animal_tat.jpg'), // Keep the image name as img13.jpg
    title: 'Animal Tattoos',
    description: 'Animal designs inspired by the beauty of wildlife, capturing the essence of fur, textures, and cuteness.'
  }  
];

function Styles() {
  return (
    <section id="styles" className="block styles-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Styles</h2>
          <div className="subtitle">Explore our tattoo styles</div>
        </div>
        <Row>
          {
            stylesData.map(style => (
              <Col sm={12} md={6} lg={4} key={style.id}>
                <div className='style-wrapper'>
                  <Image src={style.image} fluid />
                  <h3>{style.title}</h3>
                  <p>{style.description}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default Styles;
