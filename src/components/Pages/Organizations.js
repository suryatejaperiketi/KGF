import React from "react";
import "../Styles/AdminDBH.css";
import {useNavigate} from "react-router-dom"

function Organizations() {
  const navigate = useNavigate();
  return (
    <section className="admin-dashboard-section">
        <h1 className="admin-dh-title">Organizations</h1>
      <div className="container">
       <card className="admin-dh-card" onClick={()=>navigate("/admindashboard/orgs-student-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Students</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-emp-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Employess</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-busi-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Business</p>
        </card>

        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-med-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Medical</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-advo-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Advocates</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-agri-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Agriculture</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-media-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Media</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-flm-industry-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Film Industry</p>
        </card>
        <card className="admin-dh-card" onClick={()=> navigate("/admindashboard/orgs-others-table")}>
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Others</p>
        </card>
      </div>
    </section>
  );
}

export default Organizations;