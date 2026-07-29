import React from "react";
import OutOfIndia from "./OutOfIndia";
import NonResident from "./NonResident";
import { useState } from "react";

function OthersMembership() {
  const [residency, setResidency] = useState("In India");
  return (
    <>
      <form>
        <div className="kgf-memb-form-grid">
          <div>
            <label className="kgf-memb-form-label">
              Others Type<spa className="kgf-required">*</spa>
            </label>
            <select className="kgf-memb-form-control">
              <option>Select</option>
              <option>Film & Media</option>
              <option>Construction</option>
              <option>Services</option>
              <option>Arts</option>
              <option>Freelancing</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Type of Work<span className="kgf-required">*</span>
            </label>

            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Enter Work Type"
            />
          </div>
          <div>
            <label className="kgf-memb-form-occupation">
              Others<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-option"
              placeholder="Enter Type"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default OthersMembership;
