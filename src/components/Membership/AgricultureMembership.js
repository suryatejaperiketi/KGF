import React from "react";

function AgricultureMembership() {
  return (
    <>
      <form>
        <div className="kgf-memb-form-grid">
          <div>
            <label className="kgf-memb-form-label">
              Farmer Role<spa className="kgf-required">*</spa>
            </label>
            <select className="kgf-memb-form-control">
              <option>Select</option>
              <option>OWN</option>
              <option>LEASE</option>
              <option>BOTH</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-label">
              Crop Type<span className="kgf-required">*</span>
            </label>
            <select className="kgf-memb-form-control">
              <option>Select</option>
              <option>Paddy</option>
              <option>Sugar Cane</option>
              <option>Tobacco</option>
              <option>Chilli</option>
              <option>Cotton</option>
              <option>Coconut</option>
              <option>Lemon</option>
              <option>Palm Oil</option>
              <option>Maize</option>
              <option>Vegetables</option>
              <option>Flowers</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="kgf-memb-form-occupation">
              Others<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-option"
              placeholder="Crop Name"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default AgricultureMembership;
