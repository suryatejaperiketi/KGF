import React from "react";
import "../Styles/HeroSection.css";
import heroImg from "../../assets/Herosecimg.png";



function HeroSection() {

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Global Unity, Kamma Pride
        </h1>

        <p>
          Connecting Kammas Worldwide for Growth, Culture, and Leadership.
        </p>

        <button className="hero-btn">READ MORE</button>
      </div>
        
    </section>
  );
}

export default HeroSection;
