import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ lightMode }) => {
  const [light, setlight] = useState(lightMode);
  const mynav = useRef();
  const navref = useRef();
  const toggleref = useRef();
  const stopPropa = (e) => {
    e.stopPropagation();
  };
  const handleDarkMode = (e) => {
    stopPropa(e);
    setlight(!light);
    document.body.classList.toggle("light");
    localStorage.setItem("Light Mode", !light);
  };
  const handleclassopen = (...ele) => {
    ele.forEach((element) => {
      element.current.classList.toggle("open");
    });
  };
  const handlenav = (e) => {
    stopPropa(e);
    handleclassopen(toggleref, navref);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== toggleref) {
        if (navref.current.classList.contains("open")) {
          handleclassopen(toggleref, navref);
        }
      }
    });
    window.onscroll = () => {
      if (window.scrollY === 0) {
        mynav.current.classList.remove("scroll");
      } else {
        mynav.current.classList.add("scroll");
      }
    };
  });
  return (
    <header ref={mynav}>
      <Container className="d-flex align-items-center position-relative pt-2">
        <NavLink exact="true" to="/" className="logo">
          <span className="letterZ">M</span>ostafa
        </NavLink>
        <nav className="flex_between flex-grow-1">
          <div
            className="pages d-flex flex-grow-1 justify-content-center"
            ref={navref}
          >
            <NavLink exact="true" to="/">
              Home
            </NavLink>
            <NavLink exact="true" to="/Projects">
              Projects
            </NavLink>
            <NavLink exact="true" to="/About">
              About
            </NavLink>
            <NavLink exact="true" to="/Contact">
              Contact
            </NavLink>
          </div>
          <div className="info d-flex">
            {light ? (
              <FontAwesomeIcon
                icon={faMoon}
                className="themeIcon"
                onClick={handleDarkMode}
              />
            ) : (
              <FontAwesomeIcon
                icon={faLightbulb}
                className="themeIcon"
                onClick={handleDarkMode}
              />
            )}
            <a
              href="https://github.com/MostafaHosny97"
              className="github"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/Mostafa.Hosny74/"
              className="facebook"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-hosny-4128b6250/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <div
              className="toggle d-lg-none"
              ref={toggleref}
              onClick={handlenav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
