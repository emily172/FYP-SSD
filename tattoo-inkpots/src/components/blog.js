import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const blogData = [
  {
    id: 1,
    image: require('../assets/images/Tattoo_Aftercare.png'),
    time: '15 Nov 2024',
    title: 'Tattoo Aftercare 101',
    description: 'Learn how to take care of your new tattoo to ensure proper healing and vibrant colors.',
    link: 'https://www.inkpots.com/blog1'
  },
  {
    id: 2,
    image: require('../assets/images/Top_10.png'),
    time: '10 Nov 2024',
    title: 'Top 10 Tattoo Trends for 2025',
    description: 'Discover the latest trends in tattoo design and what’s popular this year.',
    link: 'https://www.inkpots.com/blog2'
  },
  {
    id: 3,
    image: require('../assets/images/choose_tat.jpg'),
    time: '07 Nov 2024',
    title: 'Choosing the Perfect Tattoo Design',
    description: 'Tips and advice on how to choose the perfect tattoo design that suits your style.',
    link: 'https://www.inkpots.com/blog3'
  }
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from Blog</h2>
          <div className="subtitle">Get our latest news</div>
        </div>
        <Row>
          {
            blogData.map(blog => (
              <Col sm={12} md={6} lg={4} key={blog.id}>
                <div className='holder'>
                  <Card className='blog-card'>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {blog.description}
                      </Card.Text>
                      <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
