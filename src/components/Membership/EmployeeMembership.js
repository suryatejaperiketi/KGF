import React from "react";

import "../Styles/StudentMembership.css";

function EmployeeMembership() {
  return (
    <>
      <form>
        <div className="kgf-memb-form-grid">
          <div>
            <label className="kgf-memb-form-occupation kgf-memb-form-label">
              Employee Type<spa className="kgf-required">*</spa>
            </label>
            <select className="kgf-memb-form-option">
              <option>Select</option>
              <option>Govt Employee</option>
              <option>PVT Employee</option>
            </select>
            <select className="kgf-memb-form-option" style={{ marginLeft: "20px" }}>
              <option>Select</option>
              <option>Central</option>
              <option>State</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Department / Company Name<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Department"
            />
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Designation / Post<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Designation"
            />
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Office Location<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Office Location"
            />
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Work State / District
              <span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="State / District"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default EmployeeMembership;
