import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import msgicon from "../../assets/msgicon.png";
import "../Styles/AdminJobs.css";
const AdminJobs = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showDistFilter, setShowDistFilter] = useState(false);
  const [showBloodGroupFilter, setShowBloodGroupFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  return (
    <div className="admin-jobs-container">
      <h2>Jobs</h2>
      <div className="kgf-admin-jobs-flex-container">
        <div className="kgf-admin-jobs-checkbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-jobs-checkbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-jobs-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-jobs-search">
          <input type="text" placeholder="Search by name & company......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-jobs-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-jobs-delete">
          <button>Delete</button>
        </div>
        <IoFilter
          className="admin-jobs-filter-icon"
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>

      {showFilter && (
        <div className="admin-jobs-filter-popup">
          <div className="admin-jobs-filter-box">
            <span
              onClick={() => {
                setShowFilter(false);
                setShowBloodGroupFilter(false);
                setShowDistFilter(false);
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
        <div className="admin-jobs-dist-filter-popup">
          <div className="admin-jobs-dist-filter-box">
            <span onClick={() => setShowDistFilter(false)}>X</span>
            <label>District :</label>
            <input type="text" />
            <label>Village :</label>
            <input type="text" />
          </div>
        </div>
      )}

      {showBloodGroupFilter && (
        <div className="admin-jobs-blood-filter-popup">
          <div className="admin-jobs-blood-filter-box">
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
        <div className="admin-jobs-date-filter-popup">
          <div className="admin-jobs-date-filter-box">
            <span onClick={() => setShowDateFilter(false)}>X</span>
            <label>Date :</label>
            <input type="date" />
          </div>
        </div>
      )}

      <table>
        <thead className="admin-jobs-header">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Job Role</th>
            <th>No. of Job Posts</th>
            <th>District</th>
            <th>Village</th>
            <th>Job Postings</th>
          </tr>
        </thead>

        <tbody className="admin-jobs-body">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>ysk infotech</td>
            <td>Manager</td>
            <td>2</td>
            <td>Eluru</td>
            <td>Eluru</td>
            <td>
              <button
                className="kgf-admin-view-btn"
                onClick={() => navigate("/admindashboard/adminjobslists")}
              >
                View jobs
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobs;
