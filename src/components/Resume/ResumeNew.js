import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

import pdf from "../../Assets/Bharat_Resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {

  const [width, setWidth] = useState(1200);


  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);


  return (

    <section className="modern-resume-section">

      <Particle />

      <Container>

        {/* ================= HEADER ================= */}

        <div className="modern-resume-header">

          <span className="modern-resume-label">
            MY RESUME
          </span>

          <h1>
            Professional <strong>Resume</strong>
          </h1>

          <p>
            A quick overview of my education, technical
            skills, projects and professional journey.
          </p>

          <div className="resume-header-line"></div>

        </div>


        {/* ================= ACTION BUTTONS ================= */}

        <div className="resume-actions">

          <Button
            className="modern-resume-download"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >

            <AiOutlineDownload />

            <span>
              Download Resume
            </span>

          </Button>


          <Button
            className="modern-resume-view"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >

            <FiExternalLink />

            <span>
              Open Full Resume
            </span>

          </Button>

        </div>


        {/* ================= RESUME PREVIEW ================= */}

        <Row className="resume-preview-row">

          <Col
            lg={10}
            md={11}
            sm={12}
            className="mx-auto"
          >

            <div className="modern-resume-card">

              {/* Browser-style header */}

              <div className="resume-window-header">

                <div className="resume-window-dots">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <div className="resume-window-title">
                  Bharat_Resume.pdf
                </div>

                <div className="resume-window-status">
                  PDF
                </div>

              </div>


              {/* PDF */}

              <div className="resume-document-wrapper">

                <Document
                  file={pdf}
                  className="resume-document"
                  loading={
                    <div className="resume-loading">
                      Loading resume...
                    </div>
                  }
                  error={
                    <div className="resume-loading">
                      Unable to load resume preview.
                    </div>
                  }
                >

                  <Page
                    pageNumber={1}
                    scale={
                      width > 1200
                        ? 1.45
                        : width > 786
                        ? 1.15
                        : 0.55
                    }
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                  />

                </Document>

              </div>

            </div>

          </Col>

        </Row>


        {/* ================= BOTTOM CTA ================= */}

        <div className="resume-bottom-cta">

          <p>
            Interested in working together?
          </p>

          <Button
            className="modern-resume-download"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >

            <AiOutlineDownload />

            Download My Resume

          </Button>

        </div>

      </Container>

    </section>

  );
}


export default ResumeNew;