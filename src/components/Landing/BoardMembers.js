import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/BoardMembers.css";

import img1 from "../../assets/Events1.png";
import img2 from "../../assets/muralimohan.png";
import img3 from "../../assets/sujanachow.png";
import img4 from "../../assets/Tnageswarao.png";

const boardMembers = [
  {
    name: "Jetti Kusum Kumar",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img1,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#",
  },
  {
    name: "Maganti Murali Mohan",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img2,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#",
  },
  {
    name: "Sujana Chowdary",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img3,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#",
  },
  {
    name: "Thummala Nageswara Rao",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img4,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#",
  },
];

const BoardMembers = () => {
  return (
    <div className="board-section container" id="board-members">
      <h4 className="board-title mb-5 text-center">OUR BOARD MEMBERS</h4>

      <div className="row justify-content-center g-4">
        {boardMembers.map((member, index) => (
          <div key={index} className="col-12 col-md-6">
            <div className="card board-card d-flex flex-row align-items-center h-100 p-3">

              <img
                src={member.image}
                alt={member.name}
                className="board-image me-3"
              />

          
              <div className="board-content w-100">
                <div className="board-text text-center">
                  <h5 className="board-name mb-1">{member.name}</h5>
                  <p className="board-title1 mb-1">{member.title1}</p>
                  <p className="board-title2">{member.title2}</p>
                </div>

                {/* ✅ ICONS CENTERED BELOW TEXT */}
                <div className="board-icons">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin style={{ color: "#0A66C2" }} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter style={{ color: "#1D9BF0" }} />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook style={{ color: "#1877F2" }} />
                  </a>
                  <a href={member.youtube} target="_blank" rel="noreferrer">
                    <FaYoutube style={{ color: "#FF0000" }} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;