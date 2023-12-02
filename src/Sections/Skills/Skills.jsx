import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { data } from "../../constants";
import "./Skills.scss";

import AOS from "aos";
AOS.init({
  once: true,
});

const Skills = () => {
  return (
    <section className="Skills section_padding" data-aos={"fade-up"}>
      <h2 className="main_heading">Skills</h2>
      <Container>
        <div className="Skills_cont">
          {data.Skills.map((ele, i) => (
            <div className="Skill" key={i}>
              {ele.icon ? <FontAwesomeIcon icon={ele.icon} /> : ele.iconAlt}
              <p>{ele.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
