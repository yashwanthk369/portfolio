import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src="/portfolio/PassportSizePhoto.jpg" alt="Yashwanth K" className="hero-img" />
        <div className="hero-text">
          <h1>Hi, I'm Yashwanth K</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I specialize in building robust web applications using React, Django, and Bootstrap, delivering innovative solutions with a focus on user experience and performance.
          </p>
          <a href="#contact" className="hero-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;