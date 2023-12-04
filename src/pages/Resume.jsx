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
    color: "gray",
    lineHeight: "initial",
    fontWeight: "normal",
  },
  card: {
    margin: 20,
    background: "#d2e9f2",
    outlineStyle: "solid",
    outlineWidth: "4px",
  },
};

function Resume() {
  return (
    <div style={styles.body && styles.card}>
      <h1 style={styles.heading}>Resume</h1>
      <p style={styles.content}>
        Download my{" "}
        <a href="resumeWebDeveloper.pdf" target="_blank">
          resume
        </a>
      </p>

      <p style={styles.content}>Front-End Technologies:</p>
      <p style={styles.content}>Back-End Technologies:</p>
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

export default Resume;
