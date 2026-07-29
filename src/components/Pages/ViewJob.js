// ViewJob.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "../Styles/viewjob.css";
import joblogoimg from "../../assets/ysk-logo.png";

function ViewJob() {
  const { id } = useParams();
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
      description: "Need trainer with good communication and teaching skills.",
      logo: joblogoimg
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
      description: "Need Frontend Developer with React experience.",
      logo: joblogoimg
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
      description: "Need Python Developer with Django knowledge.",
      logo: joblogoimg
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
      description: "Need UI Designer with creative skills.",
      logo: joblogoimg
    }
  ];

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return <h2>Job Not Found</h2>;
  }

  return (
    <div className="view-job-page">
      <div className="view-job-card">
        <img src={job.logo} alt="logo" width="120" />

        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Skills:</strong> {job.skills}</p>
        <p><strong>Qualification:</strong> {job.qualification}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Description:</strong> {job.description}</p>

        <button onClick={() => navigate("/dashboard/student")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewJob;