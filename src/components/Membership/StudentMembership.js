import React from "react";

import "../Styles/StudentMembership.css";
import { useState } from "react";
import OutOfIndia from "./OutOfIndia.js";
import NonResident from "./NonResident.js";
import EmployeeMembership from "./EmployeeMembership.js";
import BusinessMembership from "./BusinessMembership.js";
import AgricultureMembership from "./AgricultureMembership.js";
import OthersMembership from "./OthersMembership.js";


function StudentMembership({closeMembership}) {
  const [residency, setResidency] = useState("In India");
  const [occupation, setOccupation] = useState("");
  const [popUp, setPopUp] = useState(false)

  function openPopup() {
  return setPopUp(true)
}

function closePopup() {
  return setPopUp(false)
}

  return (
    <>
    <section className="main-section">
      <div className="kgf-memb-overlay">
       
        <div className="kgf-memb-container">
           <div className="kgf-memb-title">
          <h3>KGF Membership</h3>
          <button onClick={closeMembership}>X</button>
        </div>
          <div className="kgf-memb-heading">
            <h4>MEMBER DETAILS</h4>
          </div>
          
          <form>
            <div className="kgf-memb-details-">
              <div className="kgf-memb-form-grid">
                {/*First Name */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    First Name (Mr/Ms/Mrs)<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="kgf-memb-form-control"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                {/*Photo */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Profile Photo<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="file"
                    className="kgf-memb-form-control"
                    placeholder="Attach Photo"
                    style={{border:"2px solid black" }}
                  />
                </div>

                {/*Data of Birth */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Date of Birth<span className="kgf-required">*</span>
                  </label>

                  <input
                    type="date"
                    className="kgf-memb-form-control"
                    placeholder="Date-Month-Year"
                    required
                  />
                </div>

                {/* Gender */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Gender<span className="kgf-required">*</span>
                  </label>
                  <div>
                    <select className="kgf-memb-form-select">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                {/*Marital Status */}
                <div className="kgf-memb-marital-form">
                  <label className="kgf-memb-form-label">
                    Marital Status<span className="kgf-required">*</span>
                  </label>
                  <div className="kgf-memb-radio-group kgf-memb-marital-radio">
                    <label>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="Married"
                      />
                      Married
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="Unmarried"
                      />
                      Unmarried
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="Divorce"
                      />
                      Divorce
                    </label>
                    <label>
                      <input type="radio" name="maritalStatus" value="Widow" />
                      Widow
                    </label>
                  </div>
                </div>

                {/* Blood Group */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Blood Group<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="kgf-memb-form-control"
                    placeholder="Select"
                    required
                  />
                </div>

                {/*Email Address */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Mail-id<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="email"
                    className="kgf-memb-form-control"
                    placeholder="Mail-id"
                    required
                  />
                </div>

                
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Mobile Number<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="kgf-memb-form-control"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>

                {/* Religion */}
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Religion<span className="kgf-required">*</span>
                  </label>
                  <div>
                    <select className="kgf-memb-form-select">
                      <option>Religion</option>
                      <option>Hindu</option>
                      <option>Christian</option>
                    </select>
                  </div>
                </div>

               
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Father Name<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="kgf-memb-form-control"
                    placeholder="Enter Father Name"
                    required
                  />
                </div>

              
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Whatsapp Number<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="kgf-memb-form-control"
                    placeholder="Enter Whatsapp Number"
                    required
                  />
                </div>

              
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Kulam <span className="kgf-required">*</span>
                  </label>
                  <select className="kgf-memb-form-select">
                    <option>Select</option>
                    <option>Pedda Kamma</option>
                    <option>Chinna Kamma</option>
                    <option>Gampa Kamma</option>
                    <option>Bangaru Kamma</option>
                  </select>
                </div>

            
                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Gothram<span className="kgf-required">*</span>
                  </label>
                  <select className="kgf-memb-form-select">
                    <option>Select</option>
                    <option>Bharadwaja Gotram</option>
                    <option>Kashyapa Gotram</option>
                    <option>Atri Gotram</option>
                    <option>Vasishta Gotram</option>
                  </select>
                </div>

              
                <div className="kgf-memb-form-content kgf-memb-form-space">
                  <label className="kgf-memb-form-label">
                    Blood Donor<span className="kgf-required">*</span>
                  </label>
                  <div className="kgf-memb-radio-group kgf-memb-radio-gap">
                    <label>
                      <input type="radio" name="blood" value="yes" />
                      Yes
                    </label>
                    <label>
                      <input type="radio" name="blood" value="no" />
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="kgf-memb-status">
                <h4>RESIDENTIAL STATUS</h4>
              </div>
              <div className="kgf-memb-residency-status">
                <div className="kgf-memb-form-residency">
                  <div className="kgf-memb-radio-group kgf-memb-marital-radio">
                    <label>
                      <input
                        type="radio"
                        name="residency"
                        value="In India"
                        onChange={(e) => setResidency(e.target.value)}
                      />
                      In India
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="residency"
                        value="Out Of India"
                        onChange={(e) => setResidency(e.target.value)}
                      />
                      Out Of India
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="residency"
                        value="Non-Resident"
                        onChange={(e) => setResidency(e.target.value)}
                      />
                      Non-Resident
                    </label>
                  </div>
                </div>
                {residency === "In India" && (
                  <div className="kgf-memb-form-grid">
                    <div className="kgf-memb-col-1">
                      <div>
                        <h5>NATIVE ADDRESS</h5>
                      </div>
                      <div>
                        <label className="kgf-memb-form-label">
                          State<span className="kgf-required">*</span>
                        </label>
                        <select className="kgf-memb-form-select">
                          <option>Select</option>
                          <option>Option1</option>
                          <option>Option2</option>
                          <option>Option3</option>
                          <option>Option4</option>
                        </select>
                      </div>
                      <br />

                      <div>
                        <label className="kgf-memb-form-label">
                          District<span className="kgf-required">*</span>
                        </label>
                        <select className="kgf-memb-form-select">
                          <option>Select</option>
                          <option>Option1</option>
                          <option>Option2</option>
                          <option>Option3</option>
                          <option>Option4</option>
                        </select>
                      </div>
                      <br />
                      <div>
                        <label className="kgf-memb-form-label">
                          Town/Village<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="Enter Town/Village"
                        />
                      </div>
                      <br />
                      <div>
                        <label className="kgf-memb-form-label">
                          Pincode<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="Enter Pincode"
                        />
                      </div>
                    </div>
                    <div className="kgf-memb-col-2">
                      <div className="kgf-memb-current-add">
                        <h5>CURRENT ADDRESS</h5>

                        <div>
                          <label className="kgf-memb-same-add">
                            Same as Native address
                          </label>
                          <div className="kgf-memb-form-checkbox">
                            <input
                              type="checkbox"
                              value="address"
                              name="address"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="kgf-memb-form-label">
                          State<span className="kgf-required">*</span>
                        </label>
                        <select className="kgf-memb-form-select">
                          <option>Select</option>
                          <option>Option1</option>
                          <option>Option2</option>
                          <option>Option3</option>
                          <option>Option4</option>
                        </select>
                      </div>
                      <br />
                      <div>
                        <label className="kgf-memb-form-label">
                          District<span className="kgf-required">*</span>
                        </label>
                        <select className="kgf-memb-form-select">
                          <option>Select</option>
                          <option>Option1</option>
                          <option>Option2</option>
                          <option>Option3</option>
                          <option>Option4</option>
                        </select>
                      </div>
                      <br />
                      <div>
                        <label className="kgf-memb-form-label">
                          Town/Village<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="Enter Town/Village"
                        />
                      </div>
                      <br />
                      <div>
                        <label className="kgf-memb-form-label">
                          Pincode<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="Enter Pincode"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {residency === "Out Of India" && <OutOfIndia />}
                {residency === "Non-Resident" && <NonResident />}

                <div className="kgf-memb-professional-status">
                  <div>
                    <h4>PROFESSIONAL STATUS</h4>
                  </div>
                  <div className="kgf-memb-occupation-select kgf-form-grid">
                    <div>
                      <label className="kgf-memb-form-occupation">
                        Occupation<span className="kgf-required">*</span>
                      </label>
                      <select
                        className="kgf-memb-form-option"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="Business">Business</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div>
                      {(occupation === "Student" ||
                        occupation === "Employee") && (
                        <div className="kgf-memb-form-content kgf-memb-form-space">
                          <label className="kgf-memb-form-label">
                            JobSeeker<span className="kgf-memb-required">*</span>
                          </label>
                          <div className="kgf-memb-radio-group kgf-memb-radio-gap">
                            <label>
                              <input type="radio" name="job" value="yes" />
                              Yes
                            </label>
                            <label>
                              <input type="radio" name="job" value="no" />
                              No
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {occupation === "Student" && (
                    <div className="kgf-memb-form-grid">
                      <div>
                        <label className="kgf-memb-form-label">
                          College Name<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="College Name"
                        />
                      </div>
                      <div>
                        <label className="kgf-memb-form-label">
                          Course<span className="kgf-required">*</span>
                        </label>
                        <select className="kgf-memb-form-select">
                          <option>Select</option>
                          <option>BTech</option>
                          <option>Degree</option>
                          <option>PG</option>
                          <option>Deploma</option>
                          <option>PHD</option>
                        </select>
                      </div>
                      <div>
                        <label className="kgf-memb-form-label">
                          Department<span className="kgf-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="kgf-memb-form-control"
                          placeholder="Department"
                        />
                      </div>

                      <div className="kgf-memb-radio-group kgf-memb-student-course">
                        <label>
                          <input type="radio" name="Course" value="pursuing" />
                          Pursung
                        </label>
                        <label>
                          <input type="radio" name="Course" value="graduate" />
                          Graduate
                        </label>
                        <div>
                          <label className="kgf-memb-form-label">
                            Expected Passout Year
                            <span className="kgf-required">*</span>
                          </label>
                          <input
                            type="text"
                            className="kgf-memb-form-control"
                            placeholder="Year of Passout"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {occupation === "Employee" && <EmployeeMembership />}
                  {occupation === "Business" && <BusinessMembership />}
                  {occupation === "Agriculture" && <AgricultureMembership />}
                  {occupation === "Others" && <OthersMembership />}
                </div>
              </div>
            </div>
          </form>
          <div className="kgf-memb-confirmation">
            <div>
              <label style={{ color: "black" }}>
                Have you previously registered with any other community
                organization?<span className="kgf-required">*</span>
              </label>
              <input type="checkbox" className="kgf-memb-form-checkbox" />
            </div>
          </div>
          <div className="kgf-memb-confirmation">
            <div>
              <label className="kgf-memb-form-label" style={{textAlign:"center"}}>Name of Organization</label>
              <select className="kgf-memb-form-org">
                <option>Organization Name</option>
                <option>Kamma Maha Samajam</option>
                <option>Kamma Community</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="kgf-memb-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default StudentMembership;
