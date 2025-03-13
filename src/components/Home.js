import React, { useState, useEffect } from "react";

const Home = () => {
  // State to track the index of the current message
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Array of messages to loop through
  const messages = [
    "Exploring the world of Java Full Stack Development, Data Science, and AI to create impactful solutions.",
    "My projects, check them out!",
    "You can find everything about me in here!!",
  ];

  // Effect to cycle through the messages continuously
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // 4-second delay for each message

    return () => clearInterval(messageInterval); // Clean up the interval
  }, [messages.length]);

  return (
    <section id="home" className="home">
      <h1>Hi, I'm Harshavardhana Mudduluru.</h1>
      <h2> An aspiring Tech enthusiast!</h2>

      {/* Typing effect: message is cycled and re-typed */}
      <p className="typing">{messages[currentMessageIndex]}</p>

      {/* Optional: Scroll down section */}
      <div className="scroll-down">
        <p>Go down to see some of my projects...</p>
        <div className="mouse"></div>
      </div>

      {/* Contact button */}
      <button className="contact-btn">
        <a href="#contact">Contact Me!</a>
      </button>

      {/* Social icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/harshavardhana-mudduluru-062080199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/mharsha315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://x.com/Harshav60750095"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
