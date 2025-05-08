import React from "react";
import python from "../Assets/skills_img/python-svgrepo-com.svg";
import Java from "../Assets/skills_img/java-logo-svgrepo-com.svg";
import JavaScript from "../Assets/skills_img/javascript.svg";
import Rjs from "../Assets/skills_img/reactjs-svgrepo-com.svg";
import HTML from "../Assets/skills_img/html-5-svgrepo-com.svg";
import CSS from "../Assets/skills_img/css-3-svgrepo-com.svg";
import NumPy from "../Assets/skills_img/numpy-svgrepo-com.svg";
import Pandas from "../Assets/skills_img/pandas-svgrepo-com.svg";
import OpenCV from "../Assets/skills_img/opencv-svgrepo-com.svg";
import Power_BI from "../Assets/skills_img/powerbi-svgrepo-com.svg";
import Tableau from "../Assets/skills_img/tableau-icon-svgrepo-com.svg";
import Excel from "../Assets/skills_img/ms-excel-svgrepo-com.svg";
import MySQL from "../Assets/skills_img/mysql-logo-svgrepo-com.svg";
import Docker from "../Assets/skills_img/docker-svgrepo-com.svg";
import PyTorch from "../Assets/skills_img/pytorch-svgrepo-com.svg";
import Tensorflow from "../Assets/skills_img/tensorflow-svgrepo-com.svg";
import GithubActions from "../Assets/skills_img/github-svgrepo-com.svg";
import JIRA from "../Assets/skills_img/jira-svgrepo-com.svg";
import Bootstrap from "../Assets/skills_img/bootstrap-svgrepo-com.svg";
import Gradle from "../Assets/skills_img/gradle-svgrepo-com.svg";
import Kubernetes from "../Assets/skills_img/kubernetes-svgrepo-com.svg";
import Postman from "../Assets/skills_img/postman-icon-svgrepo-com.svg";
import Tomcat from "../Assets/skills_img/tomcat-svgrepo-com.svg";

const skills = [
  { name: "Python", imgSrc: python },
  { name: "Java", imgSrc: Java },
  { name: "JavaScript", imgSrc: JavaScript },
  { name: "ReactJS", imgSrc: Rjs },
  { name: "HTML", imgSrc: HTML },
  { name: "CSS", imgSrc: CSS },
  { name: "NumPy", imgSrc: NumPy },
  { name: "Pandas", imgSrc: Pandas, className: "pandas" },
  { name: "OpenCV", imgSrc: OpenCV },
  { name: "Power BI", imgSrc: Power_BI },
  { name: "Tableau", imgSrc: Tableau },
  { name: "Excel", imgSrc: Excel },
  { name: "MySQL", imgSrc: MySQL },
  { name: "Docker", imgSrc: Docker },
  { name: "PyTorch", imgSrc: PyTorch },
  { name: "Tensorflow", imgSrc: Tensorflow },
  { name: "Github-Actions", imgSrc: GithubActions },
  { name: "JIRA", imgSrc: JIRA },
  { name: "Boot-strap", imgSrc: Bootstrap },
  { name: "Gradle", imgSrc: Gradle },
  { name: "Kubernetes", imgSrc: Kubernetes },
  { name: "Postman", imgSrc: Postman },
  { name: "Tomcat", imgSrc: Tomcat },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Here are my skills:</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-icon ${skill.className || ""}`}>
            <img src={skill.imgSrc} alt={skill.name} title={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
