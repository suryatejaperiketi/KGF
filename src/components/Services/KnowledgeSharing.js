import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

import knowledgeImg from "../../assets/knowledgesharing.png";
import event1Image from "../../assets/Events4.png";
import event2Image from "../../assets/Events1.png";

const KnowledgeSharing = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      <section className="knowledge-wrapper" id="knowledge">
        <div className="container knowledge-section">
          {/* TOP SECTION */}
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
              <div className="globalimg">
                <img
                  src={knowledgeImg}
                  alt="Knowledge Sharing"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">KNOWLEDGE SHARING</h3>

              <p className="knowledge-description">
                We offer tailored knowledge-sharing solutions that foster
                collaboration and streamline resources. Our platforms enable
                teams to innovate and make decisions. By tapping collective
                expertise, we help businesses drive productivity and growth,
                empowering organizations to turn knowledge into action.
              </p>
            </div>
          </div>

          {/* EVENT CARDS */}
          <div className="service-events-row">
            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event1Image} alt="Event" />
                <h6>Nallamothu Sridhar</h6>
                <p className="prof">Motivational Speaker</p>
              </div>

              <div className="service-content">
                <h3>Knowledge Sharing Event</h3>

                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>

                <p className="service-invite">Event Completed</p>

                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>

                <p>
                  <FaClock /> 10AM - 1PM
                </p>

                <p>
                  <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
                </p>

                <button className="service-btn-complete">COMPLETED</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event2Image} alt="Event" />
                <h6>Sri Jetti Kusum Kumar</h6>
                <p className="prof">Founder of KGF</p>
              </div>

              <div className="service-content">
                <h3>Knowledge Sharing Event</h3>

                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>

                <p className="service-invite">You Are Invited!</p>

                <p>
                  <SlCalender /> Aug 25 - Aug 26
                </p>

                <p>
                  <FaClock /> 11AM - 3PM
                </p>

                <p>
                  <IoLocationOutline /> Venkata Function Hall, Hyderabad-500009
                </p>

                <button className="service-btnn" onClick={() => setForm(true)}>
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {form && <RegistrationForm closeForm={() => setForm(false)} />}
    </>
  );
};
 
export default KnowledgeSharing;
