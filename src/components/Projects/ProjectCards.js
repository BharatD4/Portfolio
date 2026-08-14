import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="modern-project-card">

      {/* Project Image */}
      <div className="project-image-wrapper">

        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="modern-project-image"
        />

        <div className="project-image-overlay">
          <span>VIEW PROJECT</span>
          <FiArrowUpRight />
        </div>

      </div>


      {/* Project Content */}
      <Card.Body className="modern-project-body">

        <div className="project-number">
          PROJECT
        </div>

        <Card.Title className="modern-project-title">
          {props.title}
        </Card.Title>

        <Card.Text className="modern-project-description">
          {props.description}
        </Card.Text>
        {/* Technology Tags */}
{props.technologies && props.technologies.length > 0 && (
  <div className="project-tech-stack">
    {props.technologies.map((tech, index) => (
      <span
        className="project-tech-tag"
        key={index}
      >
        {tech}
      </span>
    ))}
  </div>
)}


        {/* Buttons */}
        <div className="modern-project-actions">

          <Button
            className="project-github-btn"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            <span>
              {props.isBlog ? "Blog" : "GitHub"}
            </span>
            <FiArrowUpRight />
          </Button>


          {!props.isBlog && props.demoLink && (
            <Button
              className="project-demo-btn"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite />
              <span>Live Demo</span>
              <FiArrowUpRight />
            </Button>
          )}

        </div>

      </Card.Body>

    </Card>
  );
}

export default ProjectCards;