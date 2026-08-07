import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import face from "../../Assets/Projects/face-recognition.png";
import analytics from "../../Assets/Projects/enterprise-data.png";
import drone from "../../Assets/Projects/drone-ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             
             <Col md={4} className="project-card">
  <ProjectCard
    imgPath={face}
    isBlog={false}
    title="Face Recognition Attendance System"
    description="An AI-based attendance system developed using Python, OpenCV, and machine learning for automatic face detection and attendance management."
    ghLink="https://github.com/BharatD4/Face-Recognition-Based-Attendance-Monitoring-System.git"
  />
</Col>
               <Col md={4} className="project-card">
  <ProjectCard
    imgPath={analytics}
    isBlog={false}
    title="Enterprise Data Analytics Dashboard"
    description="A data analytics project that analyzes enterprise datasets using Power BI, SQL, and Python to generate business insights through interactive dashboards."
    ghLink="https://github.com/BharatD4/enterprise-data-analytics-dashboard.git"
  />
</Col>          
                 <Col md={4} className="project-card">
  <ProjectCard
    imgPath={drone}
    isBlog={false}
    title="AI in Drone Technology"
    description="An AI-powered drone solution designed for intelligent surveillance, object detection, and autonomous navigation using computer vision and machine learning concepts."
    ghLink="https://github.com/BharatD4/DroneAI.git"
  />
</Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
