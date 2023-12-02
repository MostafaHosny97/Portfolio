import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  const [formInfo, setformInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (e) => {
    setformInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:zakimohsen14@gmail.com${
        formInfo.name || formInfo.email || formInfo.message
          ? `?body=${
              formInfo.name + `,` + formInfo.email + `,` + formInfo.message
            }`
          : ``
      }${formInfo.subject ? `&subject=${formInfo.subject}` : ``}`
    );
  };
  return (
    <section className="Contact section_padding">
      <h2 className="main_heading">Get In Touch</h2>
      <Container>
        <Row data-aos={"fade-up"}>
          <Col xs={12} lg={6} className="mb-5 mb-lg-0">
            <div className="Contact_col">
              <FontAwesomeIcon icon={faPhone} />
              <div className="number">
                <h3>Contact Me</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=+201111743216&text=Hello Dear, Thanks for contacting with me, Can you give me more information about your project!"
                  target="_blank"
                  className="WhatsApp"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  +201111743216
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="mb-5 mb-lg-0">
            <div className="Contact_col">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="number">
                <h3>Email Me</h3>
                <a href="mailto:mostafahosny1907@gmail.com">
                  mostafahosny1907@gmail.com
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="rowForm">
          <Col xs={12} lg={6} data-aos={"fade-up"}>
            <img src={images.contact} alt="Contact" />
          </Col>
          <Col xs={12} lg={6} data-aos={"fade-up"}>
            <div className="Contact_form">
              <form action="" onSubmit={handleSubmit} autoComplete="off">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={handleInput}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleInput}
                />
                <textarea
                  cols="30"
                  rows="7"
                  placeholder="Message"
                  name="message"
                  onChange={handleInput}
                ></textarea>
                <button type="submit" className="custom_button">
                  Send
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
