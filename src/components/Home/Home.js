import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      hero.style.setProperty("--mouse-x", `${x}px`);
      hero.style.setProperty("--mouse-y", `${y}px`);
      hero.style.setProperty("--rotate-x", `${rotateX}deg`);
      hero.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="modern-home">

      {/* ================= HERO ================= */}
      <Container
  fluid
  className="modern-home-section"
  id="home"
  ref={heroRef}
>

        {/* Existing particle animation */}
        <Particle />
        <div className="cursor-spotlight"></div>

        {/* Ambient background lights */}
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-grid"></div>

        <Container className="modern-home-content">

          <Row className="align-items-center">

            {/* ================= LEFT CONTENT ================= */}
            <Col
              md={7}
              className="modern-home-header"
            >

              {/* Small developer badge */}
              <div className="developer-badge">
                <span className="status-dot"></span>

                <span>
                  Available for opportunities
                </span>
              </div>


              {/* Greeting */}
              <h1 className="modern-greeting">
                Hi There!
                <span
                  className="modern-wave"
                  role="img"
                  aria-label="waving hand"
                >
                  👋🏻
                </span>
              </h1>


              {/* Name */}
              <h1 className="modern-heading-name">

                <span className="name-prefix">
                  I'M
                </span>

                <span className="modern-main-name">
                  BHARAT DEWANGAN
                </span>

              </h1>


              {/* Typewriter */}
              <div className="modern-type-wrapper">
                <span className="type-prefix">
                  &gt;{" "}
                </span>

                <Type />
              </div>


              {/* Description */}
              <p className="modern-hero-description">
                I build modern, responsive and scalable web
                applications with a focus on clean code,
                intuitive user experiences and real-world
                problem solving.
              </p>


              {/* CTA BUTTONS */}
              <div className="hero-buttons">

                <Link
                  to="/project"
                  className="hero-primary-button"
                >
                  <span>View My Projects</span>

                  <FiArrowUpRight />
                </Link>


                <Link
                  to="/resume"
                  className="hero-secondary-button"
                >
                  <FiDownload />

                  <span>Download Resume</span>
                </Link>

              </div>


              {/* SOCIAL LINKS */}
              <div className="hero-social-wrapper">

                <span className="connect-text">
                  Find me on
                </span>

                <div className="hero-social-links">

                  {/* GitHub */}
                  <a
                    href="https://github.com/BharatD4"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="modern-social-icon"
                  >
                    <AiFillGithub />
                  </a>


                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/bharat-dewangan-533ba3290/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="modern-social-icon"
                  >
                    <FaLinkedinIn />
                  </a>


                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/bhxrat________/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="modern-social-icon"
                  >
                    <AiFillInstagram />
                  </a>

                </div>

              </div>

            </Col>


            {/* ================= RIGHT VISUAL ================= */}
            <Col
              md={5}
              className="modern-home-visual"
            >

              {/* Floating code decoration */}
              <div className="floating-code-card floating-card-one">
                <span>&lt;/&gt;</span>
              </div>


              <div className="floating-code-card floating-card-two">
                <span>{"{ }"}</span>
              </div>


              {/* Main illustration container */}
              <div className="hero-image-container">

                {/* Outer glow */}
                <div className="hero-image-glow"></div>

                {/* Rotating ring */}
                <div className="hero-ring"></div>

                <img
                  src={homeLogo}
                  alt="Developer working on a laptop"
                  className="modern-home-image"
                />

              </div>


              {/* Floating developer label */}
              <div className="floating-tech-label">

                <span className="tech-dot"></span>

                <span>
                  Building with code
                </span>

              </div>

            </Col>

          </Row>

        </Container>


        {/* Scroll indicator */}
        <div className="scroll-indicator">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="scroll-line">
            <div></div>
          </div>

        </div>

      </Container>


      {/* ================= EXISTING ABOUT ================= */}
      <Home2 />


      {/* ================= SOCIAL SECTION ================= */}
      <Container className="modern-social-section">

        <Row>

          <Col
            md={12}
            className="modern-social-content"
          >

            <span className="section-mini-label">
              CONNECT
            </span>

            <h2>
              Let's build something
              <span> amazing.</span>
            </h2>

            <p>
              Feel free to connect with me through
              any of the platforms below.
            </p>


            <div className="modern-social-large-links">

              <a
                href="https://github.com/BharatD4"
                target="_blank"
                rel="noreferrer"
                className="large-social-card"
              >
                <AiFillGithub />

                <div>
                  <strong>GitHub</strong>
                  <span>@BharatD4</span>
                </div>

                <FiArrowUpRight />
              </a>


              <a
                href="https://www.linkedin.com/in/bharat-dewangan-533ba3290/"
                target="_blank"
                rel="noreferrer"
                className="large-social-card"
              >
                <FaLinkedinIn />

                <div>
                  <strong>LinkedIn</strong>
                  <span>Connect with me</span>
                </div>

                <FiArrowUpRight />
              </a>


              <a
                href="https://www.instagram.com/bhxrat________/"
                target="_blank"
                rel="noreferrer"
                className="large-social-card"
              >
                <AiFillInstagram />

                <div>
                  <strong>Instagram</strong>
                  <span>@bhxrat________</span>
                </div>

                <FiArrowUpRight />
              </a>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default Home;