import React from "react";
import "../Styles/AdminBloodDonorsDetails.css";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function AddDonor() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <button className="bloodback" onClick={() => navigate(-1)}>
          <TiArrowBack /> Back
        </button>
        <div className="admin-blood-donor-details-title">
          <h3>Add Donor</h3>
          
        </div>

        <div className="admin-blood-donor-details-add-btn">
            <button>ADD +</button>
        </div>

        <div className="admin-blood-donor-details-grid-container">
          <div className="admin-blood-donor-details-form-content">
            <label className="admin-blood-donor-details-form-label">
              Donor Name
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <input
              type="text"
              className="admin-blood-donor-details-form-control"
              required 
              placeholder="Name"
              />
          </div>

          <div className="admin-blood-donor-details-form-content">
            <label className="admin-blood-donor-details-form-label">
              Blood Group
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <div>
              <select
                className="admin-blood-donor-details-form-control">
                <option>Select</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </select>
            </div>
          </div>

          <div className="admin-blood-donor-details-form-content">
            <label className="admin-blood-donor-details-form-label">
              Phone Number
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <input
              type="text"
              className="admin-blood-donor-details-form-control"
              required
              placeholder="Phone Number"
            />
          </div>

          <div className="admin-blood-donor-details-form-content">
            <label className="admin-blood-donor-details-form-label">
              City / District
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <input
              type="text"
              className="admin-blood-donor-details-form-control"
              required
              placeholder="City/District"
            />
          </div>

          <div className="admin-blood-donor-details-form-content">
            <label className="admin-blood-donor-details-form-label">
              State
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <input
              type="text"
              className="admin-blood-donor-details-form-control"
              required
              placeholder="State"
            />
          </div>

          <div className="admin-blood-donor-details-form-space">
            <label className="admin-blood-donor-details-form-label">
              Blood Donor
              <span className="admin-blood-donor-details-required">*</span>
            </label>
            <div className="admin-blood-donor-details-radio-gap">
              <label>
                <input type="radio" name="blood"/>
                Yes
              </label>
              <label>
                <input type="radio" name="blood"/>
                No
              </label>
            </div>
          </div>
        </div>
        <div className="admin-blood-donor-details-post-btn">
          <button>Post</button>
        </div>
      </section>
    </>
  );
}

export default AddDonor;
