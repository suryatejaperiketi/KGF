import React from "react";
import "../Styles/AdminDonorView.css";
import { useNavigate } from "react-router-dom";
function AdminDonorView() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="admin-donar-view-container">
          <div
            className="admin-donar-view-close-btn"
            onClick={() => navigate(-1)}
          >
            X
          </div>

          <div className="admin-donar-view-details-grid">
            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Donar Name :-</span>
              <span className="admin-donar-view-value">Surya</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Phone Number :-</span>
              <span className="admin-donar-view-value">1234567890</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">State :-</span>
              <span className="admin-donar-view-value">Andhra Pradesh</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">District :-</span>
              <span className="admin-donar-view-value">East Godavari</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Village / City :-</span>
              <span className="admin-donar-view-value">Eluru</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Pincode :-</span>
              <span className="admin-donar-view-value">5000031</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Amount Donate :-</span>
              <span className="admin-donar-view-value">2000</span>
            </div>

            <div className="admin-donar-view-detail-row">
              <span className="admin-donar-view-label">Way of Pay :-</span>
              <span className="admin-donar-view-value">G - Pay</span>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDonorView;
