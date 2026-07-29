import React from "react";
import "../Styles/AdminDBH.css";
import {useNavigate} from "react-router-dom"

function Telangana() {
const navigate = useNavigate();

  return (
    <section className="admin-dashboard-section">
      <h1 className="admin-dh-title">Telangana</h1>
      <div className="container">
        <card className="admin-dh-card" onClick={()=>navigate("/admindashboard/telangana-student-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Students</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/telan-emp-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Employess</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/telan-busi-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Business</p>
        </card>

        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-med-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Medical</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-advo-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Advocates</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-agri-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Agriculture</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-media-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Media</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-flm-industry-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Film Industry</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/tg-others-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Others</p>
        </card>
      </div>
    </section>
  );
}

export default Telangana;
