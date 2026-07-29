import React from "react";
import "../Styles/AdminDBH.css";
import { useNavigate } from "react-router-dom";

function AdminDashboardHome() {
  const navigate = useNavigate();
  return (
    <section className="admin-dashboard-section">
      <h1 className="admin-dh-title">Registrations</h1>
      <div className="container">
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/telangana")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Telangana</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/andhra-pradesh")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Andhra Pradesh</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/tamil-nadu")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Tamil Nadu</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/nri")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">NRI</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/karnataka")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Karnataka</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/organization")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Organization</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/outside-of-india")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Out Side Of India</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/gujarat")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Gujarat</p>
        </card>
        <card
          className="admin-dh-card"
          onClick={() => navigate("/admindashboard/organizations")}
        >
          <h2 className="admin-dh-card-title">20</h2>
          <p className="admin-dh-card-text">Organizations</p>
        </card>
      </div>
    </section>
    
  );
}

export default AdminDashboardHome;
