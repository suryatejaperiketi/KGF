import React from "react";
import "../Styles/RegistrationForm.css";

function RegistrationForm({ closeForm }) {
  return (
    <>
      <div className="kgf-reg-overlay">
        <section className="kgf-reg-container">
          <div className="kgf-reg-remove-btn">
            <button onClick={closeForm}>X</button>
          </div>
          <div className="kgf-reg-heading">
            <h4>REGISTRATION FORM</h4>
            <p>KGF Global Event</p>
          </div>

          <form>
            <div className="kgf-reg-form-grid">
              {/*Full Name */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  Full Name<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="text"
                  className="kgf-reg-form-control"
                  placeholder="Enter Full Name"
                  required
                />
              </div>

              {/*Phone Number */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  Phone Number<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="tel"
                  className="kgf-reg-form-control"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              {/* Email Id */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  Email Id<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="email"
                  className="kgf-reg-form-control"
                  placeholder="Enter Mail Id"
                  required
                />
              </div>
              {/* State */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  State<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="text"
                  className="kgf-reg-form-control"
                  placeholder="Enter State"
                  required
                />
              </div>
              {/* District */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  District<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="text"
                  className="kgf-reg-form-control"
                  placeholder="Enter District"
                  required
                />
              </div>
              {/* City/Village */}
              <div className="kgf-reg-form-content">
                <label className="kgf-reg-form-label">
                  City/Village<span className="kgf-reg-required">*</span>
                </label>
                <input
                  type="text"
                  className="kgf-reg-form-control"
                  placeholder="Enter City/Village"
                  required
                />
              </div>
            </div>
          </form>

          <div className="kgf-reg-confirmation">
            <div>
              <input type="checkbox" className="kgf-reg-form-checkbox" />
            </div>
            <div>
              <label style={{ color: "#202020", fontSize: "14px" }}>
                Have you previously registered with any other community
                organization?<span className="kgf-reg-required">*</span>
              </label>
            </div>
          </div>

          <div className="kgf-reg-btn">
            <button>Submit</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default RegistrationForm;
