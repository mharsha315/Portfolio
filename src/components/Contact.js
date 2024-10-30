import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
emailjs.init('pBGBooS4wPEA8j8P1');  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_8mnagms',  // EmailJS service ID
      'template_5gks6wf', // EmailJS template ID
      {
        to_name: 'Harshavardhana Mudduluru',
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email
      },
    )
    .then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h1>Get In Touch</h1>
          {isSent && <p className="success-message">Message sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="John@doe.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send <span className="icon">&#x2709;</span></button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-details">
            <p><span className="icon">&#x2709;</span> harshamudduluru3105@gmail.com</p>
            <p><span className="icon">&#x260E;</span> +1 (438) 979-8729</p>
            <p><span className="icon">&#x1F4CD;</span> Canada</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/harshavardhana-mudduluru-062080199/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/mharsha315" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/Harshav60750095" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
