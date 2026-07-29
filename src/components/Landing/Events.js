import React, { useState } from "react";
import "../Styles/Events.css";
import { SlCalender } from "react-icons/sl";
import { FaClock, FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import ServicesKnoweldgeRegister  from "../ServicesKnoweldgeRegister";


import img1 from "../../assets/Events1.png";
import img2 from "../../assets/Events2.png";
import img3 from "../../assets/Events3.png";
import img4 from "../../assets/Events4.png";

function Events() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
    <section className="events-section mb-5 mt-3">
      <div className="container">
        <h2 className="events-title">EVENTS</h2>

        <div className="events-header">
          <h4>Up Coming Events :</h4>
          <button className="view-btn">View All <FaArrowRight /></button>
        </div>

        <div className="events-row">
          <div className="event-card-bg">
            <div className="event-left">
              <img src={img1} alt="event" />
              <h6>Sri Jetti Kusum Kumar</h6>
              <p>Founder of KGF</p>

            </div>

            <div className="event-content">
              <h3>KGF Global Event</h3>
              <p className="invite">You Are Invited!</p>
              <p>
                <SlCalender /> Aug 20 - Aug 21
                <p>
                  <FaClock /> 10pm - 1am
                </p>
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad
              </p>
              <div className="event-btn">
                <button className="register-btn"  onClick={openPopup}>REGISTER NOW</button>
              </div>
            </div>
          </div>

          <div className="event-card-bg">
            <div className="event-left">
              <img src={img2} alt="event" />
              <h6>Sri Jetti Kusum Kumar</h6>
            </div>
            <div className="event-content">
              <h3>KGF Global Event</h3>
              <p className="invite">You Are Invited!</p>
              <p>
                <SlCalender /> Aug 20 - Aug 21
                <p>
                  <FaClock /> 10pm - 1am
                </p>
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad
              </p>
              <div className="event-btn">
                <button className="register-btn" onClick={openPopup}>REGISTER NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="events-header">
          <h4>Past/Completed Events :</h4>
          <button className="view-btn">View All <FaArrowRight /></button>
        </div>

        <div className="events-row">
          <div className="event-card-bg">
            <div className="event-left">
              <img src={img3} alt="event" />
              <h6>Sri Jetti Kusum Kumar</h6>
            </div>
            <div className="event-content">
              <h3>KGF Global Event</h3>
              <p className="invite">Event Completed</p>
              <p>
                <SlCalender /> Aug 20 - Aug 21
                <p>
                  <FaClock /> 10pm - 1am
                </p>
              </p>
              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad
              </p>
              <div className="event-btn">
                <button className="completed-btn">Completed</button>
              </div>
            </div>
          </div>

          <div className="event-card-bg">
            <div className="event-left">
              <img src={img4} alt="event" />
              <h6>Sri Jetti Kusum Kumar</h6>
            </div>
            <div className="event-content">
              <h3>KGF Global Event</h3>
              <p className="invite">Event Completed</p>
              <p>
                <SlCalender /> Aug 20 - Aug 21
                <p>
                  <FaClock /> 10pm - 1am
                </p>
              </p>
              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad
              </p>
              <div className="event-btn">
                <button className="completed-btn">Completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <ServicesKnoweldgeRegister show={showPopup} onClose={closePopup} />
    </>
  );
}

export default Events;
