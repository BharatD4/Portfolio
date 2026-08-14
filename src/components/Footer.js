import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="modern-footer">

      <Container>

        <Row className="footer-main-row align-items-center">

          {/* BRAND */}

          <Col md={4} className="footer-brand">

            <div className="footer-logo">
              <span>&lt;</span>BD<span>/&gt;</span>
            </div>

            <p>
              Building modern software experiences
              with clean code and creative technology.
            </p>

          </Col>


          {/* STATUS */}

          <Col md={4} className="footer-status">

            <span className="footer-status-label">
              AVAILABLE FOR
            </span>

            <h4>
              Software Development
            </h4>

            <p>
              Full Stack · AI · Web Technologies
            </p>

          </Col>


          {/* BACK TO TOP */}

          <Col md={4} className="footer-top-section">

            <a
              href="#home"
              className="footer-back-top"
            >
              Back to top
              <span>↑</span>
            </a>

          </Col>

        </Row>


        {/* DIVIDER */}

        <div className="footer-divider"></div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © {year} Bharat Dewangan
          </span>

          <span>
            Designed & Built with React
          </span>

          <span>
            All Rights Reserved.
          </span>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;