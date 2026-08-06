import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Bharat Dewangan</span> from{" "}
            <span className="purple">Chhattisgarh, India</span>.
            <br />
            <br />
            I am currently pursuing my{" "}
            <span className="purple">
              Bachelor of Technology (B.Tech) in Computer Science &
              Engineering
            </span>
            .
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">
              Software Development, Full Stack MERN Development,
              Artificial Intelligence, Machine Learning, Enterprise Data
              Analytics, and Drone Technology.
            </span>
            <br />
            <br />
            My goal is to become a skilled{" "}
            <span className="purple">
              Software Developer
            </span>{" "}
            and build innovative applications that solve real-world problems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full Stack Web Applications 💻
            </li>

            <li className="about-activity">
              <ImPointRight /> Solving Coding Problems 🧩
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring AI & Machine Learning 🤖
            </li>

            <li className="about-activity">
              <ImPointRight /> Working on Real-World Projects 🚀
            </li>

            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎵
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop improving."
          </p>

          <footer className="blockquote-footer">
            Bharat Dewangan
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;