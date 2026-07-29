import React from "react";
import "../Styles/gallery.css";

import globalsummitimg from "../../assets/globalsummit1.png";
import globalsummitimg2 from "../../assets/globalsummit2.png";
import globalsummitimg3 from "../../assets/globalsummit3.png";

import sportsmeetimg from "../../assets/sportsmeet1.png";
import sportsmeetimg2 from "../../assets/sportsmeet2.png";
import sportsmeetimg3 from "../../assets/sportsmeet3.png";

import gettogetherimg1 from "../../assets/gettogether1.png";
import gettogetherimg2 from "../../assets/gettogether2.png";
import gettogetherimg3 from "../../assets/gettogether3.png";

function Gallery() {
  const sections = [
    {
      title: "GLOBAL SUMMIT",
      images: [globalsummitimg, globalsummitimg2, globalsummitimg3],
      
    },
    {
      title: "SPORTS",
      images: [sportsmeetimg, sportsmeetimg2, sportsmeetimg3],
    },
    {
      title: "GET TOGETHER",
      images: [gettogetherimg1, gettogetherimg2, gettogetherimg3],
    },
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Gallery</h2>

        {sections.map((section, index) => (
          <div className="gallery-block" key={index}>
            <div className="gallery-header">
              <h4>{section.title}</h4>
              <button className="view-btn">View All</button>
            </div>

            <div className="gallery-grid">
              {section.images.map((img, i) => (
                <figure className="gall-row" key={i}>
                  <img src={img} alt="gallery" className="img-fluid" />
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;