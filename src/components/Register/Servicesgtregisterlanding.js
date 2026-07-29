import React, { useState } from "react";
import "../Styles/Servicesgtregisterlanding.css";
// import EMployeepng from "../assets/empico.png";
// import Studentpng from "../assets/stuico.png";
// import tpoServiceRegister from "../assets/tpoico.png";
// import Member from "./Membership/Member";

const Servicesgtregisterlanding = ({closePopupAndOpenLogin }) => {
  const [showMember, setShowMember] = useState(false);

  return (
    <div
      className={`text-center ${
        showMember ? "" : "register-form-container"
      }`}
    >
      {!showMember ? (
        <>
          {/* Top Note */}
          <div className="d-flex justify-content-center mt-3 align-items-center gap-3">
            <p className="fw-bold text-danger mb-0" style={{ fontSize: "20px" }}>
              If you don’t have an account, please take membership.
            </p>
            <button className="bt-mb" onClick={() => setShowMember(true)}>
              MEMBER SHIP
            </button>
          </div>

          <h2 className="po-heading my-4">Select Your Login Type</h2>

          <div className="row justify-content-center">
            <div className="col-md-3 col-10 mb-3">
              <div className="login-role-card" onClick={() => closePopupAndOpenLogin("hr")}>
                {/* <img src={EMployeepng} alt="Employee" className="role-img" /> */}
                <h4 className="role-title">Employee Login</h4>
              </div>
            </div>

            <div className="col-md-3 col-10 mb-3">
              <div className="login-role-card" onClick={() => closePopupAndOpenLogin("student")}>
                {/* <img src={Studentpng} alt="Student" className="role-img" /> */}
                <h4 className="role-title">Student Login</h4>
              </div>
            </div>

            <div className="col-md-3 col-10 mb-3">
              <div
                className="login-role-card"
                onClick={() => (window.location.href = "/tpo")}
              >
                {/* <img src={tpoServiceRegister} alt="TPO" className="role-img" /> */}
                <h4 className="role-title">TPO Login</h4>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="membership-only-container">
          {/* <Member /> */}
        </div>
      )}
    </div>
  );
};

export default Servicesgtregisterlanding;
