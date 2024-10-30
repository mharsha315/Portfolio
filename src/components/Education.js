import React from 'react';
import concordia from '../Assets/concordia.jpg'
import rec from '../Assets/rec.jpg'
import education from '../Assets/education.jpg'

const Education = () => {
  return (
    <section id="education" className="education-section">
        <h1 clssName="education-title">Education</h1>
      <div className="education-container">
        <div className="education-content">
          <div className="education-item">
            <img src={concordia} alt="Concordia University" className="education-logo" />
            <div className="education-details">
              <h3>Concordia University</h3>
              <p>Masters of Applied Computer Science</p>
              <p>Sep 2022 - Aug 2024</p>
            </div>
          </div>
          <hr />
          <div className="education-item">
            <img src={rec} alt="Rajalakshmi Engineering College" className="education-logo" />
            <div className="education-details">
              <h3>Rajalakshmi Engineering College</h3>
              <p>Bachelors in Computer Science</p>
              <p>Aug 2018 - Jul 2022</p>
            </div>
          </div>
        </div>
        <div className="education-image">
          <img src={education} alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Education;
