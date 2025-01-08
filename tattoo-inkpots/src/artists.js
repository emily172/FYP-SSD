import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const artistsData = [
  {
    id: 1,
    image: require('./assets/images/tattoo_artists_1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gabriel Hart',
    designation: 'Lead Artist',
    description: 'Specializes in traditional and Japanese style tattoos.'
  },
  {
    id: 2,
    image: require('./assets/images/tattoo_artists_5.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Reeds',
    designation: 'Artist',
    description: 'Expert in realism and portrait tattoos.'
  },
  {
    id: 3,
    image: require('./assets/images/tattoo_artists_7.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Dupoint',
    designation: 'Senior Artist',
    description: 'Focuses on custom designs and cover-ups.'
  },
  {
    id: 4,
    image: require('./assets/images/tattoo_artists_3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Williams',
    designation: 'Junior Artist',
    description: 'Passionate about creating meaningful tattoos and providing excellent service.'
  },
  {
    id: 5,
    image: require('./assets/images/tattoo_artists_4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Emma Smith',
    designation: 'Senior Artist',
    description: 'Specializes in watercolor and geometric tattoos.'
  },
  {
    id: 6,
    image: require('./assets/images/tattoo_artists_2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Liam Ross',
    designation: 'Artist',
    description: 'Expert in black and grey realism tattoos.'
  },
  {
    id: 7,
    image: require('./assets/images/tattoo_artists_6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Olivia Adams',
    designation: 'Junior Artist',
    description: 'Focuses on minimalistic and line work tattoos.'
  },
  {
    id: 8,
    image: require('./assets/images/tattoo_artists_8.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Noah Cheng',
    designation: 'Apprentice',
    description: 'Learning various tattoo styles and techniques.'
  }
];

function Artists() {
  return (
    <section id="artists" className="block artists-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Artists</h2>
          <div className="subtitle">Meet our talented artists</div>
        </div>
        <Row>
          {
            artistsData.map(artist => (
              <Col sm={12} md={6} lg={3} key={artist.id}>
                <div className='artist-card'>
                  <div className='image'>
                    <Image src={artist.image} fluid />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={artist.fbLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={artist.twitterLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                          <li><a href={artist.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{artist.name}</h3>
                    <span className='designation'>{artist.designation}</span>
                    <p>{artist.description}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default Artists;
