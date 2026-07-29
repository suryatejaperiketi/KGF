import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import "../Styles/AdminDonations.css";

const AdminDonations = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showAmountFilter, setShowAmountFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);

  return (
    <div className="admin-donation-container">
      <h2>Donations</h2>
      <div className="kgf-admin-donation-flex-container">
        <div className="kgf-admin-donation-checkbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-donation-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-donation-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-donation-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-donation-delete">
          <button>Delete</button>
        </div>
        <IoFilter
          className="admin-donation-filter-icon"
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>
      <div className="kgf-admin-donation-add-btn mb-3">
        <button onClick={() => navigate("/admindashboard/addDonor")}>
          Add Donor +
        </button>
      </div>

      {showFilter && (
        <div className="admin-donation-filter-popup">
          <div className="admin-donation-filter-box">
            <span
              onClick={() => {
                setShowFilter(false);
                setShowLocationFilter(false);
                setShowAmountFilter(false);
                setShowDateFilter(false);
              }}
            >
              X
            </span>
            <p onClick={() => setShowLocationFilter(!showLocationFilter)}>
              Location
            </p>
            <p onClick={() => setShowAmountFilter(!showAmountFilter)}>Amount</p>
            <p onClick={() => setShowDateFilter(!showDateFilter)}>
              Sort by Date
            </p>
          </div>
        </div>
      )}

      {showLocationFilter && (
        <div className="admin-donation-location-filter-popup">
          <div className="admin-donation-location-filter-box">
            <span onClick={() => setShowLocationFilter(false)}>X</span>
            <label>District :</label>
            <input type="text" />
            <label>Village :</label>
            <input type="text" />
          </div>
        </div>
      )}

      {showAmountFilter && (
        <div className="admin-donation-amnt-filter-popup">
          <div className="admin-donation-amnt-filter-box">
            <span onClick={() => setShowAmountFilter(false)}>X</span>
            <label>Amount :</label>
            <input type="text" />
          </div>
        </div>
      )}

      {showDateFilter && (
        <div className="admin-donation-date-filter-popup">
          <div className="admin-donation-date-filter-box">
            <span onClick={() => setShowDateFilter(false)}>X</span>
            <label>Date :</label>
            <input type="date" />
          </div>
        </div>
      )}

      <table>
        <thead className="admin-donation-header">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>District</th>
            <th>Village</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>987773443</td>
            <td>3000</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
              <button
                className="kgf-admin-view-btn"
                onClick={() => navigate("/admindashboard/donorview")}
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>987773443</td>
            <td>3000</td>
            <td>Eluru</td>
            <td>Dubacherla</td>
            <td>
              <button
                className="kgf-admin-view-btn"
                onClick={() => navigate("/admindashboard/donorview")}
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminDonations;
