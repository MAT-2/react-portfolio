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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        provident ipsam eos saepe adipisci repudiandae ipsum facere nisi
        deserunt quibusdam, totam possimus soluta ullam hic ut amet sequi
        praesentium obcaecati laudantium voluptatum magnam dolor voluptates
        aspernatur! Aliquid nihil neque magnam, veniam vero labore impedit quis!
        Accusantium exercitationem accusamus deserunt impedit eligendi sint
        consequuntur quam nesciunt iure perferendis. Dolore sequi ipsam, ratione
        voluptatibus cum excepturi. Aperiam inventore possimus commodi.
        Cupiditate eum tenetur laboriosam odit quis quaerat possimus corrupti
        ipsum quo eius recusandae necessitatibus numquam sed, dolorum sequi
        dignissimos illum omnis. Sunt consequatur nisi dignissimos at maxime
        numquam consectetur pariatur aut explicabo.
      </p>
      <div className="d-flex justify-content-center p-4">
        <div className="p-2">
          <FontAwesomeIcon icon={faGithub} size="6x" />
        </div>
        <div className="p-2">
          <FontAwesomeIcon icon={faLinkedin} size="6x" />
        </div>
        <div className="p-2">
          <FontAwesomeIcon icon={faStackOverflow} size="6x" />
        </div>
      </div>
    </div>
  );
}

export default About;
