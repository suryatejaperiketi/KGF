  import React, { useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "../Styles/kgfkingdom.css";
  import HyderabadImg from "../../assets/telenganaimg.png";
  import AndhraImg from "../../assets/andhraimg.png";
  import SrilankaImg from "../../assets/srilankaimg.png";
  import KarnatakaImg from "../../assets/karnatakaimg.png";
  import TamilnaduImg from "../../assets/tamilnaduimg.png";
  import WorldwideImg from "../../assets/worldwideimg.png";
import StudentMembership from "../Membership/StudentMembership";


  const chapters = [
    {
      name: "Telangana",
      members: "more than 40",
      icon: HyderabadImg,
      btnColor: "danger",
    },
    {
      name: "Andhra Pradesh",
      members: "more than 20",
      icon: AndhraImg,
      btnColor: "danger",
    },
    {
      name: "Sri Lanka",
      members: "more than 20",
      icon: SrilankaImg,
      btnColor: "danger",
    },
    {
      name: "Karnataka",
      members: "more than 30",
      icon: KarnatakaImg,
      btnColor: "danger",
    },
    {
      name: "Tamil Nadu",
      members: "more than 20",
      icon: TamilnaduImg,
      btnColor: "danger",
    },
  
    {
      name: "Worldwide",
      members: "more than 10",
      icon: WorldwideImg,
      btnColor: "danger",
    },
    
    
  ];

  export default function KgfKingdom({openPopUp}) {
      const [membership, setMembership] = useState(false)
    return (
      <>
     <div className="container p-5" id="chapters">
  <div className="text-center mb-5">
    <h3 className="kingdom-title">KGF KINGDOMS</h3>
  </div>

  <div className="row g-4">
    {chapters.map((chapter, index) => (
      <div className="col-lg-4 col-md-6" key={index}>
        <div className="chapter-card text-center">
          <div className="icon-container">
            <img
              src={chapter.icon}
              alt={chapter.name}
              className="chapter-icon"
            />
          </div>

          <h5 className="chapter-title">{chapter.name}</h5>

          <p className="chapter-members">
            This chapter has {chapter.members} members
          </p>

          <button className="get-btn" onClick={() => setMembership(true)}>GET MEMBER</button>
        </div>
      </div>
    ))}
  </div>
</div>
{membership && <StudentMembership closeMembership={()=>setMembership(false)}/>}
</>

    );
  }
