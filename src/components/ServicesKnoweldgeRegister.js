
import React,{useEffect,useState} from "react";
import Servicesgtregisterlanding from "../components/Servicesgtregisterlanding";
import "bootstrap/dist/css/bootstrap.min.css";

import UserLogin from "../components/Pages/UserLogin";
import AdminLogin from "../components/Pages/AdminLogin";
import StudentMembership from "./Membership/StudentMembership";


const RegisterPopup = ({ show, onClose }) => {

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


 c
          <div className="p-2">
            {showPopup && (
              <Servicesgtregisterlanding
                closePopupAndOpenLogin={closePopupAndOpenLogin}
              />
            )}
            {loginType === "membership" && <StudentMembership onClose={closeLoginModal} />}
            {loginType === "hr" && <AdminLogin onClose={closeLoginModal} />}
            {loginType === "student" && (
              <UserLogin onClose={closeLoginModal} />
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default RegisterPopup;

