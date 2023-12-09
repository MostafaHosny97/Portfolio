import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";

import AOS from "aos";
AOS.init({
  once: true,
});

const About = () => {
  return (
    <section className="About section_padding">
      <h2 className="main_heading">About Me</h2>
      <Container>
        <article className="qual_cont" data-aos={"fade-up"}>
          <p>
            Hi , I'm a Front-end web developer | React | NextJS with <span>1</span>+ years of
            experience in designing and building responsive web applications.
          </p>
        </article>
        <article className="About_Info" data-aos={"fade-up"}>
          <Row>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Name:</p>
              <p>Mostafa Hosny</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Age:</p>
              <p className="fontalt mt-1">26</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Country:</p>
              <p>Cairo / Egypt</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>CV:</p>
              <a
                href="https://drive.google.com/file/d/1m-TQine0LVsg_AjkQ4yZOctwdCYwEg2z/view?usp=sharing"
                className="view custom_button"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Phone:</p>
              <p className="fontalt mt-1">01111743216</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Gmail:</p>
              <p className="gmail">mostafahosny1907@gmail.com</p>
            </Col>
          </Row>
        </article>
        <article className="About_passion" data-aos={"fade-up"}>
          <p>
            Programming is my passion, I ambitious and always set goals to me to
            motivate me to work hard in my position.
          </p>
          <p>
            <FontAwesomeIcon icon={faHandPointRight} />
            My favourite Sports are Football, Tennis and Swimming.
          </p>
        </article>
      </Container>
    </section>
  );
};

export default About;
