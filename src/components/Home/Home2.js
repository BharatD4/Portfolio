import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bharat.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi Everyone, I am{" "}
              <b className="purple">Bharat Dewangan</b> from{" "}
              <b className="purple">Chhattisgarh, India.</b>

              <br />
              <br />

              I am currently pursuing a{" "}
              <b className="purple">
                Bachelor of Technology (B.Tech) in Computer Science &
                Engineering
              </b>
              . I am passionate about software development and enjoy building
              innovative applications that solve real-world problems.

              <br />
              <br />

              I have practical experience in{" "}
              <b className="purple">
                MERN Stack Development (MongoDB, Express.js, React.js,
                Node.js), HTML5, CSS3, JavaScript (ES6+), Java, C, C++,
                REST APIs, Git, GitHub, Responsive Web Development, and
                Database Management.
              </b>

              <br />
              <br />

              I am also interested in{" "}
              <b className="purple">
                Artificial Intelligence, Machine Learning, Enterprise Data
                Analytics, Computer Vision, Cloud Computing, Data Structures &
                Algorithms, Object-Oriented Programming (OOP), DBMS, and
                Operating Systems.
              </b>

              <br />
              <br />

              My goal is to build scalable software solutions, continuously
              improve my technical expertise, and grow as a{" "}
              <b className="purple">
                Software Developer, Full Stack MERN Developer, and AI Engineer.
              </b>

              <br />
              <br />

              Beyond coding, I enjoy working on personal projects, learning
              emerging technologies, solving coding challenges, exploring
              open-source projects, and listening to music.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Bharat Dewangan"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;