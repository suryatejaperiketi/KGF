
import React, { useState,useEffect } from "react";
import "../Styles/Applicationform.css";
import { IoRefresh } from "react-icons/io5";

function ApplcationformPrev() {
  const [experienceLevel, setExperienceLevel] = useState("Select");
  const [isFresher, setIsFresher] = useState(false);
  const [experiences, setExperiences] = useState([
    { previousCompany: "",previousRole: "", dateOfJoining: "", relievingDate: "" },
  ]);

  const handleExperienceLevel = (e) => {
    const value = e.target.value;
    setExperienceLevel(value);
    if (value === "Fresher") {
      setIsFresher(true);
    } else {
      setIsFresher(false);
    }
  };

  const handleFresherCheckbox = (e) => {
    setIsFresher(e.target.checked);
    if (e.target.checked) {
      setExperienceLevel("Fresher");
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { previousCompany: "", dateOfJoining: "", relievingDate: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const isExperienced =
    experienceLevel === "Experienced" && !isFresher;

    const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";

  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return captcha;
};

const [captcha, setCaptcha] = useState("");

useEffect(() => {
  setCaptcha(generateCaptcha());
}, []);

const refreshCaptcha = () => {
  setCaptcha(generateCaptcha());
};  

  return (
    <div className="application-form">
      <div className="form-container">

        <div className="section-header">Personal Information</div>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value={"Surya"}/>
            
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" value={"Teja"}/>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" value={"9182735577"}/>
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="email" value={"suryatejaperiketi570@gmail.com"}/>
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" value="2026-05-15" readOnly />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select value="Male" disabled>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" value={"Hyderabad"}/>
          </div>
          <div className="form-group">
            <label>Pan Number</label>
            <input type="text" value={"JHGD87898JJ"} />
          </div>
          <div className="form-group">
            <label>Upload Pan</label>
            <input type="text" value="pan.pdf" />
          </div>
          <div className="form-group">
            <label>Upload Resume</label>
            <input type="text" value={"resume.pdf"} />
          </div>
          <div className="form-group">
            <label>Upload Photo</label>
            <input type="text" value={"pic.jpg"} />
          </div>
          <div className="form-group">
            <label>LinkedIn/Portfolio URL</label>
            <input type="text"  value={"linkedinurl"}/>
          </div>
        </div>

        <div className="section-header">Educational Information</div>
        <div className="form-grid">
          <div className="form-group">
            <label>Highest Qualification</label>
            <input type="text" value={"B Tech"} />
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <input type="text" value={"Computer Science"} />
          </div>
          <div className="form-group">
            <label>University</label>
            <input type="text" value={"AKNU"} />
          </div>
          <div className="form-group">
            <label>College</label>
            <input type="text" value={"Elite"}/>
          </div>
          <div className="form-group">
            <label>Year Of Passing</label>
            <input type="text" value={"2024"} />
          </div>
        </div>

        <div className="section-header">Job Details</div>
        <div className="form-grid">
          <div className="form-group">
            <label>Position Applied for</label>
            <input type="text" value={"React js"} />
          </div>
          <div className="form-group">
            <label>Preferred Work Mode</label>
            <input type="text" value={"On-Site"} />
          </div>
          <div className="form-group">
            <label>Key Skills</label>
            <input type="text" value={"React js"} />
          </div>
          <div className="form-group">
            <label>Expected Salary</label>
            <input type="text" value={"3,50,000"}/>
          </div>
          <div className="form-group full-width">
            <label>Why Hire Me</label>
            <textarea rows="4" value="I have strong skills in React.js, JavaScript, HTML, CSS, and Python Full Stack development."></textarea>
            
          </div>
        </div>


        <div className="section-header">Professional Experience</div>
        <div className="form-grid">
          <div className="form-group">
            <label>Level of experience</label>
            <select value={experienceLevel} onChange={handleExperienceLevel}>
              <option>Select</option>
              <option>Fresher</option>
              <option>Experienced</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              checked={isFresher}
              onChange={handleFresherCheckbox}
            />
            <label>I'm a Fresher Applicant</label>
          </div>

          <div className="captcha-container">

  <label>Captcha</label>

  <div className="captcha-wrapper">

    <div className="captcha-code-box">
      <span>{captcha}</span>

      <IoRefresh
        className="refresh-icon"
        onClick={refreshCaptcha}
      />
    </div>

    <input
      type="text"
      placeholder="Enter Captcha"
      className="captcha-input"
    />

  </div>

  </div>
          
        </div>  
     
        {isExperienced && (
          <div className="experience-section">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-entry">
                <div className="experience-entry-header">
                  <span className="experience-entry-label">
                    {index === 0
                      ? "1. Previous Company"
                      : `${index + 1}. Previous Company`}
                  </span>
                  {index > 0 && (
                    <button
                      className="remove-exp-btn"
                      onClick={() => removeExperience(index)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>

                <div className="form-grid experience-grid">
                  <div className="form-group">
                    <label>Previous Company</label>
                    <input
                      type="text"
                      value={"YSK INFOTECH PVT LTD"}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "previousCompany",
                          e.target.value
                        )
                      }
                    />
                  </div>

                   <div className="form-group">
                    <label>Previous Role</label>
                    <input
                      type="text"
                      value={"REACT JS"}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "previousRole",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Date of Joining</label>
                    <input
                      type="date"
                      value="2026-05-15"
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "dateOfJoining",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Relieving Date</label>
                    <input
                      type="date"
                      value="2026-05-15"
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "relievingDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="add-experience-row">
              <button className="add-exp-btn" onClick={addExperience}>
                + Add Experience
              </button>
            </div>
          </div>
        )}

        <div className="submit-section">
          <button className="submit-btn">Submit</button>
        </div>

      </div>
    </div>
  );
}

export default  ApplcationformPrev;
