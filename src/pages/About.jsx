//Importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  heading: {
    fontSize: "3rem",
    background: "#e8eaf6",
    minHeight: 50,
    lineHeight: 2.5,
    padding: "0 20px",
    outlineStyle: "solid",
  },
  content: {
    fontSize: "25px",
    margin: "10px",
    padding: 20,
  },
  body: {
    lineHeight: "initial",
    fontWeight: "normal",
  },
  image: { height: "100px", width: "100px", margin: "10px" },
  card: {
    margin: 20,
    background: "#d2e9f2",
    outlineStyle: "solid",
    outlineWidth: "4px",
  },
};
function About() {
  return (
    <div className="div" style={styles.body && styles.card}>
      <h1 style={styles.heading}>About Me</h1>
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        style={styles.image}
      ></img>
      <p style={styles.content}>
        Hello! My name is Matthew Casey, and I am a web developer from the
        University of Texas at Austin. I have hands-on training using front-end
        and back-end technologies, creating dynamic websites and solving a
        variety of challenges.
      </p>
      <div className="d-flex justify-content-center p-4">
        <div className="p-2" id="icon">
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </div>
        <div className="p-2">
          <FontAwesomeIcon icon={faLinkedin} size="4x" id="icon" />
        </div>
        <div className="p-2">
          <FontAwesomeIcon icon={faStackOverflow} size="4x" id="icon" />
        </div>
      </div>
    </div>
  );
}

export default About;
