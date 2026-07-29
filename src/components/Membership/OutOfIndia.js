import React from "react";

function OutOfIndia() {
  return (
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
            <label className="kgf-memb-same-add">Same as Native address</label>
            <div className="kgf-memb-form-checkbox">
              <input type="checkbox" value="address" name="address" />
            </div>
          </div>
        </div>
        <div>
          <label className="kgf-memb-form-label">
            Country<span className="kgf-required">*</span>
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
            State / Province / Region<span className="kgf-required">*</span>
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
            City<span className="kgf-required">*</span>
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
            Street Address / Area<span className="kgf-required">*</span>
          </label>
          <input
            type="text"
            className="kgf-memb-form-control"
            placeholder="Enter Address"
          />
        </div>
        <br />
        <div>
          <label className="kgf-memb-form-label">
            Postal / ZIP Code<span className="kgf-required">*</span>
          </label>
          <input
            type="text"
            className="kgf-memb-form-control"
            placeholder="Enter Postal / ZIP Code"
          />
        </div>
      </div>
    </div>
  );
}

export default OutOfIndia;
