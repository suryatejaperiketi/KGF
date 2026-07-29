import React from "react";
import { FaPeopleGroup, FaCalendarDays, FaClock } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

import event1Image from "../../assets/Events1.png";
import event2Image from "../../assets/Events1.png";
import event3Image from "../../assets/Events1.png";

import logo from "../../assets/Logo.png";
import DonateQrCode from "../../assets/Amountqr.png";

import "../Styles/DashboardHome.css";

function DashboardHome() {

  const donationData = [
    { name: "Kishore", village: "Kurnool", amount: "5000/-" },
    { name: "Ramesh", village: "Hyderabad", amount: "3000/-" },
    { name: "Suresh", village: "Nandyal", amount: "2500/-" },
    { name: "Mahesh", village: "Kadapa", amount: "4000/-" },
    { name: "Kiran", village: "Anantapur", amount: "1500/-" }
  ];

  const events = [
    {
      id: 1,
      image: event1Image,
      person: "Sri Jetti Kusum Kumar",
      role: "Founder of KGF",
      title: "KGF Global Event",
      organizer: "Organized by Sri JETTI KUSUM KUMAR",
      date: "Aug 20 - Aug 21",
      time: "10PM - 1AM",
      location: "Venkata Function Hall, Hyderabad-500029"
    },

    {
      id: 2,
      image: event2Image,
      person: "Sri Ramesh Kumar",
      role: "Chief Guest",
      title: "Youth Success Meet",
      organizer: "Organized by KGF Team",
      date: "Sep 10 - Sep 11",
      time: "6PM - 10PM",
      location: "Ameerpet Convention Hall, Hyderabad"
    },

    {
      id: 3,
      image: event3Image,
      person: "Sri Mahesh Babu",
      role: "Business Mentor",
      title: "Business Networking Event",
      organizer: "Organized by KGF Business Wing",
      date: "Oct 05 - Oct 06",
      time: "5PM - 9PM",
      location: "Madhapur Event Hall, Hyderabad"
    },
    {
      id: 4,
      image: event3Image,
      person: "Surya",
      role: "Business Mentor",
      title: "Business Networking Event",
      organizer: "Organized by KGF Business Wing",
      date: "Oct 05 - Oct 06",
      time: "5PM - 9PM",
      location: "Madhapur Event Hall, Hyderabad"
    },
    {
      id: 5,
      image: event3Image,
      person: "Revanth",
      role: "Business Mentor",
      title: "Business Networking Event",
      organizer: "Organized by KGF Business Wing",
      date: "Oct 05 - Oct 06",
      time: "5PM - 9PM",
      location: "Madhapur Event Hall, Hyderabad"
    },
     {
      id: 6,
      image: event3Image,
      person: "Dhanush",
      role: "Business Mentor",
      title: "Business Networking Event",
      organizer: "Organized by KGF Business Wing",
      date: "Oct 05 - Oct 06",
      time: "5PM - 9PM",
      location: "Madhapur Event Hall, Hyderabad"
    },
     {
      id: 5,
      image: event3Image,
      person: "Venaktesh",
      role: "Business Mentor",
      title: "Business Networking Event",
      organizer: "Organized by KGF Business Wing",
      date: "Oct 05 - Oct 06",
      time: "5PM - 9PM",
      location: "Madhapur Event Hall, Hyderabad"
    }
  ];

  return (
    <section className="dashboard-home-section">
      <div className="container">

    
        <div className="row g-3">

          <div className="col-md-4">
            <div className="dashboard-card">
              <FaPeopleGroup className="dashboard-icon"/>
              <div className="dashboard-txt">
                <h2>10,000+</h2>
                <h4>Our Members</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <MdWork className="dashboard-icon"/>
              <div className="dashboard-txt">
                <h2>10,000+</h2>
                <h4>Jobs</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <FaCalendarDays className="dashboard-icon" />
              <div className="dashboard-txt">
                <h2>500+</h2>
                <h4>Events</h4>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-4 g-3">
          <div className="col-md-5">
            <div className="donation-box">
              <h3>For Donations</h3>

              <p>Account Name: <strong>KGF FUNDS</strong></p>
              <p>Account Number: <strong>12300054967</strong></p>
              <p>IFSC CODE: <strong>SBI12356</strong></p>
              <p>Branch Name: <strong>STATE BANK OF INDIA</strong></p>
              <p>Branch Location: <strong>HYDERABAD</strong></p>

              <img src={DonateQrCode} className="dashqr" alt="QR Code" />

              <p className="donation-note">
                Your contribution helps us make a real impact.
              </p>
            </div>
          </div>



          <div className="col-md-7">
            <div className="donation-table-box">
              <h3>Donations</h3>

              <div className="table-scroll-wrapper">
                <table className="table donation-table">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Village</th>
                      <th>Amount</th>
                    </tr>
                  </thead>

                  <tbody className="scroll-body">

                    {[...donationData, ...donationData].map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.village}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>
              </div>
            </div>
          </div>


      
          <div className="dashevent-head">
            <h2>Up-Coming Events</h2>
          </div>

          <div className="event-scroll-wrapper">

            <div className="event-scroll-track">

              {[...events, ...events].map((item, index) => (

                <div className="service-card-dashome" key={index}>

                  <div className="dashboard-left-img">
                    <img src={item.image} alt="Event" />
                    <h6>{item.person}</h6>
                    <p className="prof">{item.role}</p>
                  </div>

                  <div className="service-content-dh">

                    <h3>{item.title}</h3>

                    <p className="service-org">
                      {item.organizer}
                    </p>

                    <p className="service-invite">
                      You Are Invited!
                    </p>

                    <p>
                      <SlCalender /> {item.date}
                    </p>

                    <p>
                      <FaClock /> {item.time}
                    </p>

                    <p>
                      <IoLocationOutline /> {item.location}
                    </p>

                  </div>

                  <div className="logo-dh">
                    <img src={logo} alt="Logo" />
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardHome;