import React from "react";
import "../Styles/AdminJobPreview.css";
import { TiArrowBack } from "react-icons/ti";
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

function AdminJobPreview() {
  const navigate = useNavigate();
  return (
    <>
      <section className="admin-job-preview-section">
        <button className="jobback" onClick={() => navigate(-1)}>
          <TiArrowBack/> Back
        </button>
        <div className="admin-job-preview-title">
          <h3>Job View</h3>
        </div>
        <div className="admin-job-preview-grid-container">
          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Job Title<span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"React"}
              required
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Company Name<span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"YSK Infotech Pvt Ltd"}
              required
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Department<span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              required
              value={"IT"}
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Work Mode<span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              required
              value={"Hybrid"}
            />
          </div>

          <div className="admin-job-preview-form-textarea">
            <label className="admin-job-preview-form-label">
              Roles & Responsibilities
              <span className="admin-job-preview-required">*</span>
            </label>
            <textarea
              rows="3"
              cols="30"
              value={
                "Understand business requirements and convert them into technical solutions"
              }
            />
            <div className="admin-job-preview-form-content">
              <label className="admin-job-preview-form-label">
                Qualification Required
                <span className="admin-job-preview-required">*</span>
              </label>
              <input
                type="text"
                className="admin-job-preview-form-control"
                value={"BTech"}
                required
              />
            </div>
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Required Skills
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"Required Skills"}
              required
            />

            <div className="admin-job-preview-skills">
              {skillsList.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="admin-job-preview-flex">
            <div>
              <label className="admin-job-preview-form-label">
                Experience<span className="admin-job-preview-required">*</span>
              </label>
            </div>
            <div className="admin-job-preview-form-ranges">
              <input
                type="text"
                className="admin-job-preview-form-special"
                value={"2"}
                required
              />

              <input
                type="text"
                className="admin-job-preview-form-special"
                value={"5"}
                required
              />
            </div>
          </div>

          <div className="admin-job-preview-flex">
            <div>
              <label className="admin-job-preview-form-label">
                Salary Range in LPA
                <span className="admin-job-preview-required">*</span>
              </label>
            </div>
            <div className="admin-job-preview-form-ranges">
              <input
                type="text"
                className="admin-job-preview-form-special"
                value={"5"}
                required
              />
              <input
                type="text"
                className="admin-job-preview-form-special"
                value={"7"}
                required
              />
            </div>
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Perks & Benifits
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"Perks & Benifits"}
              required
            />

            <div className="admin-job-preview-skills">
              {defaultPerks.map((perks, i) => (
                <span key={i}>{perks}</span>
              ))}
            </div>
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Job Location<span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"Hyderabad"}
              required
            />
            <div className="admin-job-preview-form-content">
              <label className="admin-job-preview-form-label">
                Job Locality
                <span className="admin-job-preview-required">*</span>
              </label>
              <input
                type="text"
                className="admin-job-preview-form-control"
                value={"Madhapur"}
                required
              />
            </div>
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Number Of Openings
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"7"}
              required
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Application Deadline
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"20-12-2025"}
              required
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              Upload Logo
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="file"
              className="admin-job-preview-form-control"
              style={{ border: "1px solid black", backgroundColor: "white" }}
            />
          </div>

          <div className="admin-job-preview-form-content">
            <label className="admin-job-preview-form-label">
              WhatsApp Number
              <span className="admin-job-preview-required">*</span>
            </label>
            <input
              type="text"
              className="admin-job-preview-form-control"
              value={"9000876534"}
              required
            />
          </div>
        </div>

        <div className="admin-job-preview-checkbox">
          <input type="checkbox" />
          <span>Is There Any Security Deposit For Apply Job ?</span>
        </div>

        <div className="admin-job-preview-uptd-btn">
          <button>Update Job</button>
        </div>
      </section>
    </>
  );
}

export default AdminJobPreview;
