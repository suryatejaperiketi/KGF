import React from "react";
import "../Styles/EmployeePostDashboard.css";
import { TiArrowBack } from "react-icons/ti";
import { LuArrowBigLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const skillsList = [
  "Python + ",
  "Java + ",
  "React.js + ",
  "Node.js + ",
  "SQL + ",
  "HTML + ",
  "CSS + ",
  "JavaScript + ",
  "AWS + ",
  "Problem Solving + ",
  "Communication + ",
];

const defaultPerks = [
  "PF/ESI ",
  "Health Insurance ",
  "Paid Leave ",
  "Food ",
  "Bonus ",
  "Incentives ",
  "Two-way Cab",
];

function EmployeePostDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <section className="dash-emp-job-preview-section">
        {/* <button className="jobback" onClick={() => navigate(-1)}>
          <TiArrowBack/> Back
        </button> */}
        <div className="dash-emp-job-preview-title">
          <h3>Employee</h3>
        </div>
        <div className="dash-emp-header">
          <LuArrowBigLeft
            className="dash-emp-left-arrow"
            onClick={() => navigate(-1)}
          />
          <h4>Jobs</h4>
        </div>
        <div className="dash-emp-job-preview-grid-container">
          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Job Title<span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Company Name
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Department<span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Work Mode<span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-textarea">
            <label className="dash-emp-job-preview-form-label">
              Roles & Responsibilities
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <textarea
              rows="3"
              cols="30"
            />
            <div className="dash-emp-job-preview-form-content">
              <label className="dash-emp-job-preview-form-label">
                Qualification Required
                <span className="dash-emp-job-preview-required">*</span>
              </label>
              <input
                type="text"
                className="dash-emp-job-preview-form-control"
                required
              />
            </div>
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Required Skills
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />

            <div className="dash-emp-job-preview-skills">
              {skillsList.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="dash-emp-job-preview-flex">
            <div>
              <label className="dash-emp-job-preview-form-label">
                Experience
                <span className="dash-emp-job-preview-required">*</span>
              </label>
            </div>
            <div className="dash-emp-job-preview-form-ranges">
              <input
                type="text"
                className="dash-emp-job-preview-form-special"
                required
              />

              <input
                type="text"
                className="dash-emp-job-preview-form-special"
                required
              />
            </div>
          </div>

          <div className="dash-emp-job-preview-flex">
            <div>
              <label className="dash-emp-job-preview-form-label">
                Salary Range in LPA
                <span className="dash-emp-job-preview-required">*</span>
              </label>
            </div>
            <div className="dash-emp-job-preview-form-ranges">
              <input
                type="text"
                className="dash-emp-job-preview-form-special"
                required
              />
              <input
                type="text"
                className="dash-emp-job-preview-form-special"
                required
              />
            </div>
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Perks & Benifits
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />

            <div className="dash-emp-job-preview-skills">
              {defaultPerks.map((perks, i) => (
                <span key={i}>{perks}</span>
              ))}
            </div>
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Job Location
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
            <div className="dash-emp-job-preview-form-content">
              <label className="dash-emp-job-preview-form-label">
                Job Locality
                <span className="dash-emp-job-preview-required">*</span>
              </label>
              <input
                type="text"
                className="dash-emp-job-preview-form-control"
                required
              />
            </div>
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Number Of Openings
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Application Deadline
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              Upload Logo
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="file"
              className="dash-emp-job-preview-form-control"
              style={{ border: "1px solid black", backgroundColor: "white" }}
            />
          </div>

          <div className="dash-emp-job-preview-form-content">
            <label className="dash-emp-job-preview-form-label">
              WhatsApp Number
              <span className="dash-emp-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="dash-emp-job-preview-form-control"
              required
            />
          </div>
        </div>

        <div className="dash-emp-job-preview-checkbox">
          <input type="checkbox" />
          <span>Is There Any Security Deposit For Apply Job ?</span>
        </div>

        <div className="dash-emp-job-preview-uptd-btn">
          <button>Post Job</button>
        </div>
      </section>
    </>
  );
}

export default EmployeePostDashboard;
