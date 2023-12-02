import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer = () => (
  <section className="footer">
    <ul className="social">
      <li>
        <a
          href="https://github.com/MostafaHosny97"
          className="Github"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Mostafa.Hosny74/"
          className="Facebook"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mostafa-hosny-4128b6250/"
          className="Linkedin"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mostafahosny_/"
          className="Instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="mailto:mostafahosny1907@gmail.com"
          className="Gmail"
          target="_blank"
          rel="noreferrer"
          aria-label="Gmail"
        >
          <FontAwesomeIcon icon={faM} />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=+201111743216&text=Hello Dear, Thanks for contacting with me, Can you give me more information about your project!"
          target="_blank"
          className="WhatsApp"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
    </ul>
    <p className="made">
      Designed By <span>Mostafa Hosny</span>
    </p>
  </section>
);

export default Footer;
