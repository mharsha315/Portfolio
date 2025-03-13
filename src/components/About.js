import React from "react";
import profile from "../Assets/profile.JPEG";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>Who Am I?</h1>
          <p>
            Hey there, I'm Harshavardhana Mudduluru, a tech enthusiast
            passionate about building intelligent solutions and deriving
            insights from data, whether it’s crafting scalable web applications,
            analyzing complex datasets, or diving into machine learning models,
            I thrive on solving problems with technology.
          </p>
          <p>
            Continuously learning and improving my skills, I enjoy working on
            projects that help me apply my knowledge, solve problems, and grow
            in the ever-evolving tech landscape.
          </p>
          <p>
            When I’m not coding or crunching numbers and stuff, I enjoy
            exploring new technologies, working on personal projects, and
            sharing knowledge with the tech community. I'm always eager to
            learn, collaborate, and make meaningful contributions.
          </p>
          <p>
            Outside the data world, you can find me hiking, watching anime, or
            experimenting with new recipes in the kitchen.
          </p>
        </div>
        <div className="about-image">
          <img src={profile} alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default About;
