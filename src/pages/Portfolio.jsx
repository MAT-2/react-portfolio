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
  card: {
    margin: 20,
    background: "#d2e9f2",
    outlineStyle: "solid",
    outlineWidth: "4px",
  },
};

function Portfolio() {
  return (
    <div>
      <div className="div" style={styles.body && styles.card}>
        <h1 style={styles.heading}>Portfolio</h1>
        <div style={styles.content} className="d-grid align-items-center">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/quote-of-the-day-logo.png"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Quote Of The Day</h5>
                  <p className="card-text">
                    A project that provides a randomized quote, followed by a
                    search API to learn more about the author of the quote.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/stressfree.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Stress-Free-Me</h5>
                  <p className="card-text">
                    A project measuring a user's stress levels, and providing a
                    chart showing stress results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/employeeTracker.png"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">
                    A employee tracking database, where a user can view and
                    update with new information via the terminal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/markdownPNG.png"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">README Generator</h5>
                  <p className="card-text">
                    This project allows a user to create generated README file.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/etchSketch.JPG"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Etch-a-Sketch</h5>
                  <p className="card-text">
                    A project that allows a user to draw. Options include
                    different colors, erase, reset, and setting size.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="/src/images/rockPaperScissors.JPG"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Rock-Paper-Scissors</h5>
                  <p className="card-text">
                    A simple rock-paper-scissors game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Portfolio;
