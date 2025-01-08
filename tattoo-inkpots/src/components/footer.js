import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer-block">
      <Container fluid>
        <div className="footer-content">
          <div className="socials">
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          <div className="copyright">&copy; 2025 Inkpots. All Rights Reserved.</div>
        </div>
        {
          showTopBtn && (
            <div className="go-top" onClick={goTop}>
              <i className="fas fa-arrow-up"></i>
            </div>
          )
        }
      </Container>
    </footer>
  );
}

export default AppFooter;
