import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am Yashwanth K, a dedicated Full Stack Developer with over 2 years of experience in creating dynamic web applications. My expertise lies in leveraging React for front-end development, Django for back-end robustness, and Bootstrap for responsive design. I thrive on solving complex problems and have a proven track record of delivering projects that enhance user engagement and business growth.
        </p>
        <div className="skills-list">
          <span className="skill">React</span>
          <span className="skill">Django</span>
          <span className="skill">Bootstrap</span>
          <span className="skill">JavaScript</span>
          <span className="skill">HTML/CSS</span>
          <span className="skill">Python</span>
        </div>
      </div>
    </section>
  );
}

export default About;