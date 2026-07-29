import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
 
import globalImg from "../../assets/global-img.png";
import event1Image from "../../assets/Events1.png";
import event2Image from "../../assets/Events3.png";
 
const GlobalNetwork = () => {
  return (
    <>
      <section className="knowledge-wrapper" id="global">
        <div className="services-name">
          <h3>Services</h3>
        </div>
 
        <div className="container knowledge-section">
 
          {/* TOP CONTENT */}
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
              <div className="globalimg">
                <img src={globalImg} alt="Global Network" className="img-fluid" />
              </div>
            </div>
 
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">GLOBAL NETWORKING</h3>
 
              <p className="knowledge-description">
                We provide global networking solutions that help businesses
                connect, collaborate, and scale across borders. With secure
                infrastructure and 24/7 support, we help you establish a
                reliable network that grows with your business and ensures
                uninterrupted operations.
              </p>
            </div>
          </div>

          <div className="service-events-row">
 
      
            <div className="service-card">
              <div className="service-left">
                <img src={event1Image} alt="Event" />
                <h6>Sri Jetti Kusum Kumar</h6>
                <p className="prof">Founder of KGF</p>
              </div>
 
              <div className="service-content">
                <h3>KGF Global Event</h3>
 
                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
 
                <p className="service-invitation">
                  You Are Invited!
                </p>
 
                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>
 
                <p>
                  <FaClock /> 10PM - 1AM
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
 
            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event2Image} alt="Event" />
                <h6>M. Venkaiah Naidu</h6>
                <p className="prof">Former Vice President of India</p>
              </div>
 
              <div className="service-content">
                <h3>KGF Global Event</h3>
 
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
                  <FaClock /> 10PM - 1AM
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
 
          </div>
        </div>
      </section>
    </>
  );
};
 
export default GlobalNetwork;