import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const homeData = [
  {
    id: 1,
    image: require('../assets/images/studio_exterior.jpg'),
    title: 'Welcome to Our Studio',
    description: 'Take a virtual tour of our state-of-the-art tattoo studio and get a glimpse of the inspiring environment we work in.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 2,
    image: require('../assets/images/receptionist_face.jpg'),
    title: 'Meet Our Friendly Receptionist',
    description: 'Our welcoming receptionist is here to help you with appointments and answer any questions you may have.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 3,
    image: require('../assets/images/empty_consulation_room.jpg'),
    title: 'Private Consultation Rooms',
    description: 'Discuss your tattoo ideas in our private consultation rooms, designed for your comfort and privacy.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 4,
    image: require('../assets/images/tattoo_artist_1.jpg'),
    title: 'Watch Our Artists at Work',
    description: 'Observe our skilled tattoo artists in action as they create stunning pieces of art.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 5,
    image: require('../assets/images/arms_shoulders_clocks.jpg'),
    title: 'Intricate Arm and Shoulder Tattoos',
    description: 'Explore our portfolio of detailed arm and shoulder tattoos, featuring stunning clock designs and more.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 6,
    image: require('../assets/images/tat_array.jpeg'),
    title: 'Diverse Tattoo Styles',
    description: 'Explore a wide array of tattoo styles and find the perfect design that suits your personality.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 7,
    image: require('../assets/images/calf_tat_peacock.jpg'),
    title: 'Beautiful Calf Tattoos',
    description: 'Check out our collection of calf tattoos, including this vibrant peacock design.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 8,
    image: require('../assets/images/louage_area.jpg'),
    title: 'Relax in Our Lounge Area',
    description: 'Enjoy a comfortable and relaxing atmosphere in our lounge area while waiting for your tattoo session.',
    link: 'https://www.inkpots.com'
  },
  {
    id: 9,
    image: require('../assets/images/video_call.jpeg'),
    title: 'Connect with Our Artists Online',
    description: 'Schedule a video call with our talented artists to discuss your custom tattoo ideas from the comfort of your home.',
    link: 'https://www.inkpots.com'
  }
];

function AppHome() {
  return (
    <section id="home" className="home-block">
      <Carousel>
        {homeData.map(home => (
          <Carousel.Item key={home.id}>
            <img className="d-block w-100" src={home.image} alt={"slide " + home.id} />
            <Carousel.Caption>
              <h2>{home.title}</h2>
              <p>{home.description}</p>
              <a className="btn btn-primary" href={home.link}>Learn More <i className="fas fa-chevron-right"></i></a>
              <a className="btn btn-success" href="#booking">Book Now <i className="fas fa-book-open"></i></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default AppHome;
