import React from "react";
import "../Styles/applicationtracker.css";
import { useNavigate, useParams } from "react-router-dom";
import joblogoimg from "../../assets/ysk-logo.png";

function ApplicationTracker() {

  const navigate = useNavigate();
  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      title: "Trainer",
      salary: "₹10,000 - ₹20,000/Month",
      company: "YSK INFOTECH PVT LTD",
      skills: "Strong Communication Skills",
      qualification: "Any Degree",
      location: "Ameerpet Hyderabad",
      experience: "1-2 Years Experience",
      openings: "04",
      deadline: "15-Dec-2025",
      logo: joblogoimg,
      responsibilities: [
        "Develop responsive web pages",
        "Integrate REST APIs",
        "Optimize website performance"
      ]
    },

    {
      id: 2,
      title: "Frontend Developer",
      salary: "₹20,000 - ₹35,000/Month",
      company: "ABC Technologies",
      skills: "React JS, HTML, CSS",
      qualification: "B.Tech / Degree",
      location: "Madhapur Hyderabad",
      experience: "1-3 Years Experience",
      openings: "03",
      deadline: "20-Dec-2025",
      logo: joblogoimg,
      responsibilities: [
        "Build reusable React components",
        "Improve UI performance",
        "Work with backend team"
      ]
    },

    {
      id: 3,
      title: "Python Developer",
      salary: "₹25,000 - ₹40,000/Month",
      company: "Tech Solutions",
      skills: "Python, Django",
      qualification: "BSC / MCA",
      location: "Kukatpally Hyderabad",
      experience: "2 Years Experience",
      openings: "05",
      deadline: "25-Dec-2025",
      logo: joblogoimg,
      responsibilities: [
        "Develop backend APIs",
        "Database management",
        "Debug application issues"
      ]
    },

    {
      id: 4,
      title: "UI Designer",
      salary: "₹18,000 - ₹30,000/Month",
      company: "Creative Soft",
      skills: "Figma, Photoshop",
      qualification: "Any Degree",
      location: "SR Nagar Hyderabad",
      experience: "1 Year Experience",
      openings: "02",
      deadline: "30-Dec-2025",
      logo: joblogoimg,
      responsibilities: [
        "Create UI wireframes",
        "Design responsive layouts",
        "Collaborate with developers"
      ]
    }
  ];

  const selectedJob = jobs.find((job) => job.id === Number(id));

 
   return (
  <section className="application-tracker-section">

    <div className="container">

      <div className="jobs-apptra">

        <div
          className="jobs-stu"
          onClick={() => navigate("/dashboard/student")}
        >
          <h3>Jobs</h3>
        </div>

        <div
          className="application-track active-tab"
          onClick={() => navigate("/dashboard/application-tracker")}
        >
          <h3>Application Tracker</h3>
        </div>

      </div>

      {!selectedJob ? (

        <div className="empty-tracker">

          <h2>No Job Selected</h2>

          <p>Please click View button from Jobs page</p>

        </div>

      ) : (

        <>

          <div className="tracker-top">

            <div className="tracker-header">

              <button
                className="back-btn"
                onClick={() => navigate("/dashboard/student")}
              >
                Back
              </button>

              <div>
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.company}</p>
              </div>

              <img src={selectedJob.logo} alt="logo" />

            </div>

          </div>

          <div className="tracker-content">

            <h4>Roles & Responsibilities</h4>

            <ul>
              {selectedJob.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Required Skills</h4>
            <p>{selectedJob.skills}</p>

            <h4>Qualification Required</h4>
            <p>{selectedJob.qualification}</p>

            <h4>Salary Range</h4>
            <p>{selectedJob.salary}</p>

            <h4>Job Location</h4>
            <p>{selectedJob.location}</p>

            <h4>Experience</h4>
            <p>{selectedJob.experience}</p>

            <h4>Number of Openings</h4>
            <p>{selectedJob.openings}</p>

            <h4>Application Deadline</h4>
            <p>{selectedJob.deadline}</p>

            <button onClick={()=> navigate("/dashboard/application-form")} className="apply-btn">
              Apply
            </button>

          </div>

        </>

      )}

    </div>

  </section>
);
}

export default ApplicationTracker;