import React, { useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Styles/TalentPublication.css";

import pub1 from "../../assets/talentpub1.png";
import pub2 from "../../assets/talentpub2.png";
import pub3 from "../../assets/talentpub3.png";
import pub4 from "../../assets/talentpub4.png";
import pub5 from "../../assets/talentpub5.png";
import pub6 from "../../assets/talentpub6.png";
import pub7 from "../../assets/talentpub7.png";

import Youtube from "./Youtube";

const publications = [
  { id: 1, title: "Talent Publication Vol. 1", img: pub1, link: pub1 },
  { id: 2, title: "Talent Publication Vol. 2", img: pub2, link: pub2 },
  { id: 3, title: "Talent Publication Vol. 3", img: pub3, link: pub3 },
  { id: 4, title: "Talent Publication Vol. 4", img: pub4, link: pub4 },
  { id: 5, title: "Talent Publication Vol. 5", img: pub5, link: pub5 },
  { id: 6, title: "Talent Publication Vol. 6", img: pub6, link: pub6 },
  { id: 7, title: "Talent Publication Vol. 7", img: pub7, link: pub7 },
];

function TalentPublication() {
  const [selected, setSelected] = useState(null);

  const scrollLeft = () => {
    document
      .getElementById("publication-slider")
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("publication-slider")
      .scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleDownload = () => {
    if (selected) {
      const link = document.createElement("a");
      link.href = selected.link;
      link.download = selected.title;
      link.click();
    }
  };

  return (
    <div className="main-sec">
      <section className="talent-section" id="talent-publications">
        <h2 className="talent-heading">TALENT PUBLICATIONS</h2>

        <p className="talent-para">
          Showcase your top talent and attract more of it. Our Talent
          Publication Service highlights your team's expertise and achievements,
          Positioning your company as an industry leader and a top destination
          for candidates
        </p>

        <div className="slider-wrapper">
          <button className="arrow-btn left-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="talent-cards" id="publication-slider">
            {publications.map((item) => (
              <div
                key={item.id}
                className={`talent-card ${
                  selected?.id === item.id ? "selected" : ""
                }`}
                onClick={() => setSelected(item)}
              >
                <img src={item.img} alt={item.title} className="talent-image" />
              </div>
            ))}
          </div>

          <button className="arrow-btn right-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>

        <div className="talent-download-center">
          <button
            className={`download-btn ${selected ? "active-btn" : ""}`}
            onClick={handleDownload}
            disabled={!selected}
          >
            <FaDownload /> Download
          </button>
        </div>
      </section>

      <Youtube />
    </div>
  );
}

export default TalentPublication;