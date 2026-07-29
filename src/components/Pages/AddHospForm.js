import React from "react";
import "../Styles/AdminDonorForm.css";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminBoardMemform.css";

const AddHospForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="kgf-admin-brdmemform-section">
        <h2>HOSPITAL FORM</h2>
        <div className="kgf-admin-donor-close-btn">
          <button onClick={() => navigate(-1)}>X</button>
        </div>
        <div className="kgf-admin-donor-grid-container">
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Hospital Name<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="School Name"
              required
            />
          </div>

          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Specialization<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Specialization"
              required
            />
          </div>

          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Sector<span className="kgf-admin-donor-required">*</span>
            </label>

            <select className="kgf-admin-brdmem-form-control" required>
              <option value="">Select Sector</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
             
            </select>
          </div>

          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Phone Number<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="tel"
              className="kgf-admin-brdmem-form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              School URL<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="School URL"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              City / village Name
              <span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="City / village Name"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              District<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="District"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              State<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="State"
              required
            />
          </div>
        </div>

        <div className="add-member-btn mt-4">
          <button>ADD SCHOOL</button>
        </div>
      </section>
    </>
  );
};

export default AddHospForm;
