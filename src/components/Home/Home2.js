import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bharat.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <section className="modern-about-section" id="about">

      {/* Background decoration */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <Container>

        {/* ================= SECTION HEADER ================= */}
        <div className="modern-section-header">

          <span className="modern-section-label">
            ABOUT ME
          </span>

          <h2>
            Turning ideas into
            <span> digital solutions.</span>
          </h2>

          <div className="section-header-line"></div>

        </div>


        {/* ================= ABOUT CONTENT ================= */}
        <Row className="align-items-center about-main-row">

          {/* LEFT — TEXT */}
          <Col
            lg={7}
            md={7}
            className="modern-about-content"
          >

            <div className="about-intro-card">

              <div className="about-card-top">
                <span className="about-terminal-dot"></span>
                <span className="about-terminal-dot"></span>
                <span className="about-terminal-dot"></span>

                <span className="about-card-title">
                  bharat@developer
                </span>
              </div>


              <div className="about-card-content">

                <p>
                  Hi Everyone, I am{" "}
                  <strong>Bharat Dewangan</strong> from{" "}
                  <strong>Chhattisgarh, India.</strong>
                </p>


                <p>
                  I am currently pursuing a{" "}
                  <strong>
                    Bachelor of Technology (B.Tech) in Computer
                    Science & Engineering
                  </strong>
                  . I am passionate about software development
                  and enjoy building innovative applications that
                  solve real-world problems.
                </p>


                <p>
                  I have practical experience in{" "}
                  <strong>
                    MERN Stack Development (MongoDB, Express.js,
                    React.js, Node.js), HTML5, CSS3, JavaScript
                    (ES6+), Java, C, C++, REST APIs, Git, GitHub,
                    Responsive Web Development, and Database
                    Management.
                  </strong>
                </p>


                <p>
                  I am also interested in{" "}
                  <strong>
                    Artificial Intelligence, Machine Learning,
                    Enterprise Data Analytics, Computer Vision,
                    Cloud Computing, Data Structures & Algorithms,
                    Object-Oriented Programming (OOP), DBMS, and
                    Operating Systems.
                  </strong>
                </p>


                <p>
                  My goal is to build scalable software solutions,
                  continuously improve my technical expertise,
                  and grow as a{" "}
                  <strong>
                    Software Developer, Full Stack MERN Developer,
                    and AI Engineer.
                  </strong>
                </p>


                <p>
                  Beyond coding, I enjoy working on personal
                  projects, learning emerging technologies,
                  solving coding challenges, exploring open-source
                  projects, and listening to music.
                </p>

              </div>

            </div>


            {/* CURRENT FOCUS */}
            <div className="about-focus-row">

              <div className="about-focus-card">
                <span className="focus-icon">⌘</span>

                <div>
                  <small>FOCUS</small>
                  <strong>Full Stack Development</strong>
                </div>
              </div>


              <div className="about-focus-card">
                <span className="focus-icon">AI</span>

                <div>
                  <small>INTEREST</small>
                  <strong>AI & Machine Learning</strong>
                </div>
              </div>

            </div>

          </Col>


          {/* RIGHT — PROFILE */}
          <Col
            lg={5}
            md={5}
            className="modern-about-visual"
          >

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.03}
              transitionSpeed={1200}
              gyroscope={true}
            >

              <div className="about-profile-card">

                {/* Card glow */}
                <div className="profile-card-glow"></div>


                {/* Image */}
                <div className="about-image-wrapper">

                  <div className="about-image-ring"></div>

                  <img
                    src={myImg}
                    className="about-profile-image"
                    alt="Bharat Dewangan"
                  />

                </div>


                {/* Profile information */}
                <div className="profile-info">

                  <span className="profile-status">
                    <span></span>
                    OPEN TO OPPORTUNITIES
                  </span>

                  <h3>
                    Bharat Dewangan
                  </h3>

                  <p>
                    Software Developer · Full Stack · AI
                  </p>

                </div>


                {/* Decorative code */}
                <div className="profile-code-decoration">
                  <span>&lt;</span>
                  <span>/</span>
                  <span>&gt;</span>
                </div>

              </div>

            </Tilt>

          </Col>

        </Row>


        {/* ================= SKILL CATEGORIES ================= */}
        <div className="about-capabilities">

          <div className="capability-card">

            <span className="capability-number">
              01
            </span>

            <div>
              <small>DEVELOPMENT</small>

              <h3>
                Full Stack Web
              </h3>

              <p>
                MERN Stack, REST APIs,
                responsive and scalable applications.
              </p>
            </div>

          </div>


          <div className="capability-card">

            <span className="capability-number">
              02
            </span>

            <div>
              <small>INTELLIGENCE</small>

              <h3>
                AI & Machine Learning
              </h3>

              <p>
                Exploring AI, ML, computer vision
                and intelligent software solutions.
              </p>
            </div>

          </div>


          <div className="capability-card">

            <span className="capability-number">
              03
            </span>

            <div>
              <small>FOUNDATION</small>

              <h3>
                Core Computer Science
              </h3>

              <p>
                DSA, OOP, DBMS, Operating Systems
                and problem solving.
              </p>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Home2;