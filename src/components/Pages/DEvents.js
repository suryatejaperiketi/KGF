import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import event1Image from "../../assets/Events1.png";
import event2Image from "../../assets/Events3.png";

function DEvents() {
  return (
    <section>
      <h2>Events</h2>
      <div className="container">
        <div className="service-events-row">
          <div className="service-card">
            <div className="service-left">
              <img src={event1Image} alt="Event" />
              <h6>Sri Jetti Kusum Kumar</h6>
              <p className="prof">Founder of KGF</p>
            </div>

            <div className="service-content">
              <h3>KGF Global Event</h3>

              <p className="service-org">Organized by Sri JETTI KUSUM KUMAR</p>

              <p className="service-invitation">You Are Invited!</p>

              <p>
                <SlCalender /> Aug 20 - Aug 21
              </p>

              <p>
                <FaClock /> 10PM - 1AM
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
              </p>

              <button className="service-btnn">REGISTER NOW</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={event2Image} alt="Event" />
              <h6>M. Venkaiah Naidu</h6>
              <p className="prof">Former Vice President of India</p>
            </div>

            <div className="service-content">
              <h3>KGF Global Event</h3>

              <p className="service-org">Organized by Sri JETTI KUSUM KUMAR</p>

              <p className="service-invitation">You Are Invited!</p>

              <p>
                <SlCalender /> Aug 20 - Aug 21
              </p>

              <p>
                <FaClock /> 10PM - 1AM
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
              </p>

              <button className="service-btnn">REGISTER NOW</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={event1Image} alt="Event" />
              <h6>Sri Jetti Kusum Kumar</h6>
              <p className="prof">Founder of KGF</p>
            </div>

            <div className="service-content">
              <h3>KGF Global Event</h3>

              <p className="service-org">Organized by Sri JETTI KUSUM KUMAR</p>

              <p className="service-invitation">You Are Invited!</p>

              <p>
                <SlCalender /> Aug 20 - Aug 21
              </p>

              <p>
                <FaClock /> 10PM - 1AM
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
              </p>

              <button className="service-btnn">REGISTER NOW</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={event2Image} alt="Event" />
              <h6>M. Venkaiah Naidu</h6>
              <p className="prof">Former Vice President of India</p>
            </div>

            <div className="service-content">
              <h3>KGF Global Event</h3>

              <p className="service-org">Organized by Sri JETTI KUSUM KUMAR</p>

              <p className="service-invitation">You Are Invited!</p>

              <p>
                <SlCalender /> Aug 20 - Aug 21
              </p>

              <p>
                <FaClock /> 10PM - 1AM
              </p>

              <p>
                <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
              </p>

              <button className="service-btnn">REGISTER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DEvents;
