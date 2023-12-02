import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "./ProfessionalExperience.scss";

import AOS from "aos";
AOS.init({
  once: true,
});

const ProfessionalExperience = () => {
  return (
    <section className="Experience section_padding" data-aos={"fade-up"}>
      <h2 className="main_heading">Professional Experience</h2>
      <Container>
        <article className="qual_cont">
          <p>
            <span>Feb 2023 - Aug 2023</span>
            <FontAwesomeIcon icon={faHandPointRight} />
            <span className="Experience_company">Startup Company | </span>
            Jordan-Amman
          </p>
          <span className="front">( Front-End Developer ) </span>
          <div className="qual_cont_info text-start custom">
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>
                Maintains high quality for code, functional specification
                documentation.
              </p>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Implementing responsive UI using ReactJs Framework.</p>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Proficiency with Git version control system.</p>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Integrating with APIs.</p>
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default ProfessionalExperience;
