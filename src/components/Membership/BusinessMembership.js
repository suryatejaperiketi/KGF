import React from "react";
import "../Styles/BusinessMembership.css";
import { useState } from "react";
import OutOfIndia from "./OutOfIndia";
import NonResident from "./NonResident";
import BusinessOutOfIndia from "./BusinessOutOfIndia";
function BusinessMembership() {
  const [residency, setResidency] = useState("In India");
  return (
    <>
      <form>
        <div className="kgf-memb-form-grid">
          <div>
            <label className="kgf-memb-form-occupation kgf-form-label">
              Business Type<spa className="kgf-required">*</spa>
            </label>
            <select className="kgf-memb-form-control kgf-memb-form-select">
              <option>Select</option>
              <option>Individual</option>
              <option>Partnership</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Company Type:<spa className="kgf-memb-required">*</spa>
            </label>
            <select className="kgf-memb-form-control kgf-memb-form-select">
              <option>Select</option>
              <option>Private Limited</option>
              <option>Public Limited</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Company Name<span className="kgf-memb-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Designation<span className="kgf-memb-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Designation"
            />
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Nature of Business
              <span className="kgf-required">*</span>
            </label>
            <select className="kgf-memb-form-control kgf-memb-form-select">
              <option>Select</option>
              <option>IT</option>
              <option>Non-IT</option>
              <option>Export & Import</option>
              <option>Trading</option>
              <option>Manufacturing</option>
              <option>Others</option>
            </select>
            <div style={{ marginTop: "20px" }}>
              <label className="kgf-memb-form-label">
                City / State / Pincode
                <span className="kgf-required">*</span>
              </label>
              <input
                type="text"
                className="kgf-memb-form-control"
                placeholder="City / State"
              />
            </div>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Choose File:
              <span className="kgf-required">*</span>
            </label>
            <select className="kgf-memb-form-control kgf-memb-form-select">
              <option>Select</option>
              <option>PAN Card</option>
              <option>Company GST Certificate</option>
              <option>MCA, MDA</option>
              <option>UDYAM / MSME</option>
            </select>
            <div className="kgf-memb-file-upload">
              <input
                type="file"
                className="kgf-memb-form-control kgf-memb-form-upload"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default BusinessMembership;
