import React from "react";

const projects = [
  {
    name: "HarshaFlix - A React-Based Movie Explorer",
    description:
      "A frontend movie browsing platform built with React.js, featuring a dynamic movie grid, search functionality, genre and rating filters, and a watchlist feature. Users can explore AI-generated movie titles, filter by genre and rating, and add movies to their watchlist.",
    techStack: ["ReactJs", "HTML/CSS", "JavaScript", "React Router"],
    githubLink: "https://github.com/mharsha315/HarshaFlix",
  },
  {
    name: "Bug Logger",
    description:
      "A bug-tracking system built with React.js that allows users to log, update, and resolve tickets. Features include priority-based sorting, ticket editing, and status updates using React’s useReducer for state management.",
    techStack: [
      "ReactJs",
      "HTML/CSS",
      "JavaScript",
      "React Hooks",
      "COntext API",
    ],
    githubLink: "https://github.com/mharsha315/Bug-Logger-using-ReactJS",
  },
  {
    name: "Car Selling Price Prediction",
    description:
      "This project uses machine learning to predict the selling price of used cars based on features like age, mileage, brand, and fuel type. Built with Django, it has a user-friendly interface for inputting car details and generating real-time price predictions. The model is trained using historical data and uses SQLite for data management.",
    techStack: [
      "Django",
      "HTML/CSS",
      "Pandas & NumPy",
      "Scikit-Learn",
      "SQLite",
    ],
    githubLink: "https://github.com/mharsha315/Car_selling_price_for_usedcars",
  },
  {
    name: "Dog_Breed_Prediction",
    description:
      "This project is a deep learning-based application designed to identify the breed of a dog from an image. It utilizes a convolutional neural network trained on labeled dog breed images, enabling it to accurately classify different breeds. The project is implemented in Python, using Keras for model building and OpenCV for image processing.",
    techStack: ["Python", "Keras", "OpenCV", "NumPy"],
    githubLink: "https://github.com/mharsha315/Dog_Breed_Prediction",
  },
  {
    name: "German_traffic_signs_classification",
    description:
      "This project involves building a deep learning model to classify German traffic signs from images accurately. Using a convolutional neural network (CNN), the model is trained on labeled images of various traffic signs to recognize and categorize them correctly.",
    techStack: ["Python", "Keras", "NumPy", "Pandas", "OpenCV"],
    githubLink:
      "https://github.com/mharsha315/German_traffic_signs_classification",
  },
  {
    name: "Text_from_Image_extraction",
    description:
      "This project is a web application that extracts text from images using Optical Character Recognition (OCR) techniques. Built with Flask as the backend framework, it allows users to upload images and receive extracted text results. The application utilizes Python libraries for image processing and OCR to ensure accurate text extraction from various image formats.",
    techStack: ["Python", "OpenCV", "NumPy", "Pillow", "Pytesseract", "Flask"],
    githubLink: "https://github.com/mharsha315/Text_from_Image_extraction",
  },
  {
    name: "Transcendental-Function-Calculator",
    description:
      "This project involves building a GUI-based calculator capable of evaluating transcendental functions such as logarithms, exponentials, and trigonometric functions. This particular calculator allows users to input mathematical expression - ab^x and receive accurate results.",
    techStack: ["JavaSwing", "Java JDB", "SonarLint", "SunChecks - Checkstyle"],
    githubLink:
      "https://github.com/mharsha315/Transcendental-Function-Calculator",
  },
  {
    name: "Drowsiness-Detection-System",
    description:
      "The Driver Drowsiness Detection System is a safety application that leverages a CNN with OpenCV to monitor drivers eye movements in real-time. By analyzing video input, the system detects signs of fatigue, such as eye closure, and triggers an alarm to alert the driver.",
    techStack: ["Python", "Keras", "NumPy", "OpenCV"],
    githubLink:
      "https://github.com/mharsha315/Drowsiness-Detection-System-CNN-OpenCV",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* Tech Stack Slide-in */}
            <div className="tech-stack">
              <h4>Technologies Used</h4>
              <div className="tech-list">
                {project.techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Source Code Link */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="source-code-link"
            >
              <i className="fas fa-code"></i> Source Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
