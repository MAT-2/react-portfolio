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
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 1 </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 4</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 5</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://i.pinimg.com/736x/ee/df/7f/eedf7fbe24e04c0e775941f54e616f4d.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 6</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas, deserunt accusamus corrupti est, minus
                    nulla incidunt illo corporis pariatur maiores officia, ipsum
                    asperiores atque.
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
