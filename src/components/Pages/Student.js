import React from "react";
import "../Styles/studentjobs.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import joblogoimg from "../../assets/ysk-logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

function Student() {
  const navigate = useNavigate();
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
      logo: joblogoimg,
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
      logo: joblogoimg,
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
      logo: joblogoimg,
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
      logo: joblogoimg,
    },
  ];

  return (
    <section className="student-section">
      <div className="container">
        <h1 className="page-title">Student</h1>
        <div className="jobs-apptra">
          <div
            className="jobs-stu active-tab"
            onClick={() => navigate("/dashboard/student")}
          >
            <h3>Jobs</h3>
          </div>

          <div
            className="application-track"
          onClick={() => navigate("/dashboard/application-tracker")}
          >
            <h3>Application Tracker</h3>
          </div>
        </div>

        <div className="row mt-3 g-3">
          {jobs.map((job) => (
            <div className="col-md-6 col-sm-12" key={job.id}>
              <div className="student-job-card">
                <div className="job-top">
                  <div className="job-left">
                    <h4>{job.title}</h4>
                    <p className="salary">{job.salary}</p>
                    <p className="company">{job.company}</p>
                  </div>

                  <div className="job-logo">
                    <img src={job.logo} alt="logo" />
                  </div>
                </div>

                <div className="content-jsb">
                  <div className="job-middle">
                    <p>
                      <strong>Skills:</strong> {job.skills}
                    </p>
                    <p>
                      <strong>Qualification:</strong> {job.qualification}
                    </p>
                  </div>

                  <div className="job-info">
                    <span>
                      <FaLocationDot /> {job.location}
                    </span>
                    <span>
                      <MdWorkHistory /> {job.experience}
                    </span>
                  </div>
                </div>

                <div className="job-bottom">
                  <button onClick={() => navigate(`/dashboard/view/${job.id}`)}>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Student;
