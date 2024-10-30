import React from 'react';
import profile from '../Assets/profile.JPEG';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>Who Am I?</h1>
          <p>
            Hey there, I'm Harshavardhana Mudduluru, an aspiring Data Analyst passionate about turning data into meaningful insights. 
            Although I’m just starting out, my curiosity and determination drive me to constantly learn and grow in the field of analytics.
          </p>
          <p>
            When I'm not crunching numbers, I enjoy exploring new data sets, working on personal projects, and sharing my knowledge with the data community. 
            I'm always eager to learn more and contribute to meaningful projects.
          </p>
          <p>
            Outside the data world, you can find me hiking, watching anime, or experimenting with new recipes in the kitchen.
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
