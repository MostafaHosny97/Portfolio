import { images } from "../../constants";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./Landing.scss";
import { useRef } from "react";

const Landing = () => {
  const angledown = useRef();
  const handleArrow = (e) => {
    e.stopPropagation();
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <section className="landing section_padding position-relative">
      <Container className="position-relative h-100">
        <div className="profile_holder">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="blob">
                <path
                  fill="#474bff"
                  d="M453,295.5Q451,351,398.5,372Q346,393,303,400.5Q260,408,210.5,428.5Q161,449,112.5,422.5Q64,396,42,345Q20,294,20.5,240Q21,186,43.5,136Q66,86,112.5,56Q159,26,211,36.5Q263,47,301,72Q339,97,374,124Q409,151,432,195.5Q455,240,453,295.5Z"
                />
              </clipPath>
            </defs>
            <image
              x="-25"
              y="35"
              width="100%"
              height="100%"
              clipPath="url(#blob)"
              xlinkHref={images.profile}
              preserveAspectRatio="xMidYMid slice"
            ></image>
          </svg>
        </div>
        <div className="profile_name">
          Hello, I'm <span>Mostafa Hosny</span>
        </div>
        <div className="profile_job">
          I'm a <span>Front-End Developer</span>
        </div>
      </Container>
      <FontAwesomeIcon
        icon={faAnglesDown}
        className="angledown"
        ref={angledown}
        onClick={handleArrow}
      />
    </section>
  );
};

export default Landing;
