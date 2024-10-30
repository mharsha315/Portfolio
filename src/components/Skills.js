import React from 'react';
import python from '../Assets/skills_img/python-svgrepo-com.svg';
import Java from '../Assets/skills_img/java-logo-svgrepo-com.svg';
import JavaScript from '../Assets/skills_img/javascript.svg';
import HTML from '../Assets/skills_img/html-5-svgrepo-com.svg';
import CSS from '../Assets/skills_img/css-3-svgrepo-com.svg';
import NumPy from '../Assets/skills_img/numpy-svgrepo-com.svg';
import Pandas from '../Assets/skills_img/pandas-svgrepo-com.svg';
import OpenCV from '../Assets/skills_img/opencv-svgrepo-com.svg';
import Power_BI from '../Assets/skills_img/powerbi-svgrepo-com.svg';
import Tableau from '../Assets/skills_img/tableau-icon-svgrepo-com.svg';
import Excel from '../Assets/skills_img/ms-excel-svgrepo-com.svg';
import MySQL from '../Assets/skills_img/mysql-logo-svgrepo-com.svg';

const skills = [
  { name: 'Python', imgSrc: python },
  { name: 'Java', imgSrc: Java },
  { name: 'JavaScript', imgSrc: JavaScript },
  { name: 'HTML', imgSrc: HTML },
  { name: 'CSS', imgSrc: CSS },
  { name: 'NumPy', imgSrc: NumPy },
  { name: 'Pandas', imgSrc: Pandas, className: 'pandas' },
  { name: 'OpenCV', imgSrc: OpenCV },
  { name: 'Power BI', imgSrc: Power_BI },
  { name: 'Tableau', imgSrc: Tableau },
  { name: 'Excel', imgSrc: Excel },
  { name: 'MySQL', imgSrc: MySQL },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Here are my skills:</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-icon ${skill.className || ''}`}>
            <img src={skill.imgSrc} alt={skill.name} title={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
