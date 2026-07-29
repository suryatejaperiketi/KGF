import React from "react";
import "../Styles/AdminDonorForm.css";
import { useNavigate } from "react-router-dom";

const AdminDonorForm = () => {
  const navigate = useNavigate()
    return (
  <>
    <section className="kgf-admin-donor-section">
        <div className='kgf-admin-donor-close-btn'>
            <button onClick={() => navigate(-1)}>X</button>
        </div>
        <div className="kgf-admin-donor-grid-container">
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Donor Name<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Donor Name"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Phone Number<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Amount Donate<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Amount Donate"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              State<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="State"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              District<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="District"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Village / City<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Village / City"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Pincode<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Pincode"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Way of Pay<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-donor-form-control"
              placeholder="Way of Pay"
              required
            />
          </div>
        </div>
        <div className="kgf-admin-donor-form-sub-btn">
          <button>Submit</button>
        </div>
    </section>
  </>
    );
};

export default AdminDonorForm;
