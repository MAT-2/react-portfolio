const styles = {
  heading: { fontSize: "3rem", margin: "10px" },
  content: { fontSize: "25px", margin: "10px" },
  body: {
    color: "gray",
    lineHeight: "initial",
    fontWeight: "normal",
  },
  image: { height: "100px", width: "100px", margin: "10px" },
};

function About() {
  return (
    <div className="div" style={styles.body}>
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
    </div>
  );
}

export default About;
