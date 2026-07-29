import React from "react";
import "../Styles/AdminDonorForm.css";
import {useNavigate} from "react-router-dom";
import "../Styles/AdminBoardMemform.css";

const AdminBoardMemForm = () => {
    const navigate =useNavigate()
    return (
  <>
    <section className="kgf-admin-brdmemform-section">
    <h2>Board Members</h2>
        <div className='kgf-admin-donor-close-btn'>
            <button onClick={()=> navigate(-1)}>X</button>
        </div>
        <div className="kgf-admin-donor-grid-container">
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Full Name<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Professional Title<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Professional Title"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Current Position<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Current Position"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Upload Photo<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="file"
              className="kgf-admin-brdmem-form-control"
              placeholder="Upload Photo"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              linkedin URL<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="linkedin URL"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Twitter URL<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Twitter URL"
              required
            />
          </div>
          <div className="kgf-admin-donor-form-content">
            <label className="kgf-admin-donor-form-label">
              Facebook Url<span className="kgf-admin-donor-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-brdmem-form-control"
              placeholder="Facebook Url"
              required
            />
          </div>
          
        </div>
      
            <div className="add-member-btn mt-4">
            <button>ADD MEMBER</button>
          </div>
    </section>
  </>
    );
};

export default AdminBoardMemForm;
