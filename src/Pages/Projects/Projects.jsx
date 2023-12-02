import "./Projects.scss";
import { data } from "../../constants";
import { Col, Container, Row } from "react-bootstrap";

import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
AOS.init({
  once: true,
});

const Projects = () => {
  return (
    <section className="Projects section_padding">
      <h2 className="main_heading">Projects</h2>
      <Container className="projects_hold">
        <Row>
          {data.projects.map((ele, i) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                key={i}
                className="mb-5"
                data-aos={"fade-up"}
              >
                <figure
                  className={`project ${ele.small && ele.small}`}
                  onClick={() => window.open(ele.website || ele.github)}
                >
                  <figcaption className="project_name">{ele.name}</figcaption>
                  <span
                    onClick={() => window.open(ele.github)}
                    className="github"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <div className="image_holder">
                    <LazyLoadImage src={ele.img} alt={ele.name} effect="blur" />
                  </div>
                </figure>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
