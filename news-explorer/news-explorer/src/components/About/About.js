import avatar from "../../images/image-03.png";

function About() {
  return (
    <section className="about-block">
      <img src={avatar} alt="avatar" className="about-block__image"></img>
      <div className="about-block__container">
        <h4 className="about-block__title">About the author</h4>
        <p className="about-block__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about-block__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
