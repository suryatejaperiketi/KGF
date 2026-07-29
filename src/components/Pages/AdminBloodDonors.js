import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import msgicon from "../../assets/msgicon.png";
import "../Styles/AdminBloodDonors.css";

const AdminBloodDonors = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showDistFilter, setShowDistFilter] = useState(false);
  const [showBloodGroupFilter, setShowBloodGroupFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  return (
    <div className="admin-blood-donor-container">
      <h2>Blood Donors</h2>
      <div className="kgf-admin-blood-donor-flex-container">
        <div className="kgf-admin-blood-donor-checkbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-blood-donor-checkbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-blood-donor-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-blood-donor-search">
          <input type="text" placeholder="Search by name & company......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-blood-donor-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-blood-donor-delete">
          <button>Delete</button>
        </div>
        <IoFilter
          className="admin-blood-donor-filter-icon"
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>

      {showFilter && (
        <div className="admin-blood-donor-filter-popup">
          <div className="admin-blood-donor-filter-box">
            <span
              onClick={() => {
                setShowFilter(false);
                setShowDistFilter(false);
                setShowBloodGroupFilter(false);
                setShowDateFilter(false);
              }}
            >
              X
            </span>
            <p onClick={() => setShowDistFilter(!showDistFilter)}>District</p>
            <p onClick={() => setShowBloodGroupFilter(!showBloodGroupFilter)}>
              Blood Group
            </p>
            <p onClick={() => setShowDateFilter(!showDateFilter)}>
              Sort by Date
            </p>
          </div>
        </div>
      )}

      {showDistFilter && (
        <div className="admin-blood-donor-dist-filter-popup">
          <div className="admin-blood-donor-dist-filter-box">
            <span onClick={() => setShowDistFilter(false)}>X</span>
            <label>District :</label>
            <input type="text" />
            <label>Village :</label>
            <input type="text" />
          </div>
        </div>
      )}

      {showBloodGroupFilter && (
        <div className="admin-blood-donor-blood-filter-popup">
          <div className="admin-blood-donor-blood-filter-box">
            <span onClick={() => setShowBloodGroupFilter(false)}>X</span>
            <label>Blood Group :</label>
            <select>
              <option>Select</option>
              <option>A+</option>
              <option>B+</option>
            </select>
          </div>
        </div>
      )}

      {showDateFilter && (
        <div className="admin-blood-donor-date-filter-popup">
          <div className="admin-blood-donor-date-filter-box">
            <span onClick={() => setShowDateFilter(false)}>X</span>
            <label>Date :</label>
            <input type="date" />
          </div>
        </div>
      )}

      <div className="admin-blood-donor-table-data">
        <table>
          <thead className="admin-blood-donor-header">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Blood Group</th>
              <th>District</th>
              <th>Village</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="admin-blood-donor-table-body">
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Surya</td>
              <td>1234567890</td>
              <td>A+</td>
              <td>Kurnool</td>
              <td>Kurnool</td>
              <td>
                <button
                  className="kgf-admin-view-btn"
                  onClick={() => navigate("/admindashboard/blooddonorsdetails")}
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBloodDonors;
