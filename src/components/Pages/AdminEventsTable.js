import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import msgicon from "../../assets/msgicon.png";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import "../Styles/AdminEventsTable.css";

const AdminEventsTable = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  return (
    <div className="admin-events-table-container">
      <h2>Events</h2>
      <div className="admin-events-table-total">
        <p>Total Responses :- 50</p>
      </div>
      <div className="kgf-admin-events-table-flex-container">
        <div className="kgf-admin-events-table-ckeckbox">
          <input type="checkbox" />
          <img src={whatsappIcon} alt="img" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-events-table-ckeckbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-events-table-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-events-table-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-events-table-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-events-table-delete">
          <button>Delete</button>
        </div>
        <IoFilter
          className="admin-events-filter-icon"
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>
      <div className="kgf-admin-events-table-add-btn mb-3">
        <button>Add +</button>
      </div>

      {showFilter && (
        <div className="admin-events-filter-popup">
          <div className="admin-events-filter-box">
            <span onClick={() =>{ setShowFilter(false)
              setShowLocationFilter(false)
              setShowDateFilter(false)
            }}>X</span>
            <p onClick={() => setShowLocationFilter(!showLocationFilter)}>
              Location
            </p>
            <p onClick={() => setShowDateFilter(!showDateFilter)}>
              Sort by Date
            </p>
          </div>
        </div>
      )}

      {showLocationFilter && (
        <div className="admin-events-location-filter-popup">
          <div className="admin-events-location-filter-box">
            <span onClick={() => setShowLocationFilter(false)}>X</span>
            <label>State :</label>
            <input type="text" />
            <label>District :</label>
            <input type="text" />
            <label>Village :</label>
            <input type="text" />
          </div>
        </div>
      )}  

      {showDateFilter && (
        <div className="admin-events-date-filter-popup">
          <div className="admin-events-date-filter-box">
            <span onClick={() => setShowDateFilter(false)}>X</span>
            <label>Date :</label>
            <input type="date" />
          </div>
        </div>
      )}
    
      <table>
        <thead className="admin-events-table-header">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email ID</th>
            <th>Profession</th>
            <th>State</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>1234567890</td>
            <td>surya@gmail.com</td>
            <td>S/W Engg</td>
            <td>AP</td>
            <td>Dubacherla</td>
            <td>
              <button className="kgf-admin-view-btn">View</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Surya</td>
            <td>1234567890</td>
            <td>surya@gmail.com</td>
            <td>S/W Engg</td>
            <td>AP</td>
            <td>Dubacherla</td>
            <td>
              <button className="kgf-admin-view-btn">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminEventsTable;
