import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import face from "../../Assets/Projects/face-recognition.png";
import analytics from "../../Assets/Projects/enterprise-data.png";
import drone from "../../Assets/Projects/drone-ai.png";
import saas from "../../Assets/Projects/multi-tenant-saas.png";
import finwell from "../../Assets/Projects/finwell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>

        {/* ================= PROJECT HEADER ================= */}

        <div className="modern-project-header">

          <span className="modern-project-label">
            MY WORK
          </span>

          <h1 className="project-heading">
            Featured <strong>Projects</strong>
          </h1>

          <p>
            A collection of projects I've built while exploring
            software development, AI, data analytics and cloud
            technologies.
          </p>

          <div className="project-header-line"></div>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <Row className="modern-project-grid">

          {/* PROJECT 1 */}

          <Col
            lg={6}
            md={6}
            className="project-card"
          >

            <ProjectCard

              imgPath={face}

              isBlog={false}

              title="Face Recognition Attendance System"

              description="An AI-based attendance system developed using Python, OpenCV, and machine learning for automatic face detection and attendance management."

              ghLink="https://github.com/BharatD4/Face-Recognition-Based-Attendance-Monitoring-System.git"

              technologies={[
                "Python",
                "OpenCV",
                "Machine Learning",
                "Computer Vision"
              ]}

            />

          </Col>


          {/* PROJECT 2 */}

          <Col
            lg={6}
            md={6}
            className="project-card"
          >

            <ProjectCard

              imgPath={analytics}

              isBlog={false}

              title="Enterprise Data Analytics Dashboard"

              description="A data analytics project that analyzes enterprise datasets using Power BI, SQL, and Python to generate business insights through interactive dashboards."

              ghLink="https://github.com/BharatD4/enterprise-data-analytics-dashboard.git"

              technologies={[
                "Power BI",
                "SQL",
                "Python",
                "Data Analytics"
              ]}

            />

          </Col>


          {/* PROJECT 3 */}

          <Col
            lg={6}
            md={6}
            className="project-card"
          >

            <ProjectCard

              imgPath={drone}

              isBlog={false}

              title="AI in Drone Technology"

              description="An AI-powered drone solution designed for intelligent surveillance, object detection, and autonomous navigation using computer vision and machine learning concepts."

              ghLink="https://github.com/BharatD4/DroneAI.git"

              technologies={[
                "Artificial Intelligence",
                "Computer Vision",
                "Machine Learning",
                "Drone Technology"
              ]}

            />

          </Col>


          {/* PROJECT 4 */}

          <Col
            lg={6}
            md={6}
            className="project-card"
          >

            <ProjectCard

              imgPath={saas}

              isBlog={false}

              title="Multi-Tenant SaaS Analytics Platform"

              description="A cloud-deployed SaaS analytics platform for monitoring tenant-specific events, API usage, analytics, usage, billing, and system health using Next.js, Go, PostgreSQL, Redis, Docker, and Railway."

              ghLink="https://github.com/BharatD4/multi-tenant-saas"

              demoLink="https://multi-tenant-saas-production-dce0.up.railway.app"

              technologies={[
                "Next.js",
                "Go",
                "PostgreSQL",
                "Redis",
                "Docker",
                "Railway"
              ]}

            />

          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={finwell}
    isBlog={false}
    title="FinWell – Personal Finance Management App"
    description="A full-stack personal finance management application that helps users track income, expenses, budgets, and financial insights through an interactive dashboard."
    ghLink="https://github.com/BharatD4/FinWell"
    demoLink="https://finwell-1.onrender.com"
  />
</Col>

        </Row>

      </Container>

    </Container>
  );
}

export default Projects;