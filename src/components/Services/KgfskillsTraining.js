import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
 
import skillImg from "../../assets/kgfskill.png";
import event1Image from "../../assets/Events3.png";
import event2Image from "../../assets/Events2.png";
 
const KgfskillsTraining = () => {
  return (
    <>
      <section className="knowledge-wrapper" id="training">
        <div className="container knowledge-section">
 
          {/* TOP SECTION */}
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
              <div className="globalimg">
                <img
                  src={skillImg}
                  alt="KGF Skills Training"
                  className="img-fluid"
                />
              </div>
            </div>
 
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">KGF SKILLS & TRAINING</h3>
 
              <p className="knowledge-description">
                We provide tailored knowledge-sharing solutions that foster
                collaboration, streamline resources, and help teams innovate.
                Our platforms enable businesses to tap into collective
                expertise and drive productivity and growth.
              </p>
            </div>
          </div>
 
          {/* EVENT CARDS */}
          <div className="service-events-row">
 
            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event1Image} alt="Event" />
                <h6>M. Venkaiah Naidu</h6>
                <p className="prof">Former Vice President of India</p>
              </div>
 
              <div className="service-content">
                <h3>Skills Training Event</h3>
 
                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
 
                <p className="service-invite">
                  Event Completed
                </p>
 
                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>
 
                <p>
                  <FaClock /> 10AM - 1PM
                </p>
 
                <p>
                  <IoLocationOutline /> Venkata Function Hall,
                  Hyderabad-500029
                </p>
 
                <button className="service-btn-complete">
                  COMPLETED
                </button>
              </div>
            </div>
 
            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event2Image} alt="Event" />
                <h6>Bharatheeyam Satyavani</h6>
                <p className="prof">Guest Speaker</p>
              </div>
 
              <div className="service-content">
                <h3>Skills Training Event</h3>
 
                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
 
                <p className="service-invite">
                  You Are Invited!
                </p>
 
                <p>
                  <SlCalender /> Aug 24 - Aug 25
                </p>
 
                <p>
                  <FaClock /> 11AM - 4PM
                </p>
 
                <p>
                  <IoLocationOutline /> Venkata Function Hall,
                  Hyderabad-500029
                </p>
 
                <button className="service-btnn">
                  REGISTER NOW
                </button>
              </div>
            </div>
 
          </div>
        </div>
      </section>
    </>
  );
};
 
export default KgfskillsTraining;