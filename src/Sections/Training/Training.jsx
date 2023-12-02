import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "./Training.scss";

import AOS from "aos";
AOS.init({
  once: true,
});

const Training = () => {
  return (
    <section className="Training section_padding" data-aos={"fade-up"}>
      <h2 className="main_heading">Certificates</h2>
      <Container>
        <article className="qual_cont">
          <p>
            <span>January 2023</span>
            <FontAwesomeIcon icon={faHandPointRight} />{" "}
            <span className="training_company">
              Route Academy IT-Training Center:
            </span>{" "}
            Learned about web applications development front-end
          </p>
        </article>
      </Container>
    </section>
  );
};
export default Training;
