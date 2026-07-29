import React, { useState,useEffect } from "react";
import Servicesgtregisterlanding from "../components/Servicesgtregisterlanding";
import "bootstrap/dist/css/bootstrap.min.css";

import HRLogin from "../components/HrDashBoard/HrLogin";
import StudentLogin from "./Student/StudentLogin";
import Member from "./Membership/Member";

const RegisterPopup = ({ show, onClose }) => {

  // ✅ Hooks must ALWAYS be at the top
  const [showPopup, setShowPopup] = useState(true);
  const [loginType, setLoginType] = useState(null);

 

   useEffect(() => {
    if (show) {
      setShowPopup(true);
      setLoginType(null);
    }
  }, [show]);

  const closePopupAndOpenLogin = (type) => {
    setShowPopup(false);
    setLoginType(type);
  };

  const closeLoginModal = () => {
    setLoginType(null);
    setShowPopup(true);
  };

  if (!show) return null;

  return (
    <>
      <div
        className="modal fade show"
        style={{
          backgroundColor: "white",
          display: "block",
          background: "rgba(0, 0, 0, 0.7)",
          zIndex: 9999,
        }}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content border-0 bg-transparent">
            <div className="d-flex justify-content-end pe-3 pt-3">
              <button
                className="btn btn-danger fw-bold"
                style={{ borderRadius: "50%" }}
                onClick={onClose}
              >
                X
              </button>
            </div>

            <div className="p-2">
              {showPopup && (
                <Servicesgtregisterlanding
                  closePopupAndOpenLogin={closePopupAndOpenLogin}
                />
              )}
              {loginType === "membership" && <Member onClose={closeLoginModal}/>}
              {loginType === "hr" && <HRLogin onClose={closeLoginModal} />}
              {loginType === "student" && (
                <StudentLogin onClose={closeLoginModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
