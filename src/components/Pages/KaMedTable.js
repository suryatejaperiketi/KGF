
import React from 'react';
import { useNavigate } from "react-router-dom";
import msgicon from "../../assets/msgicon.png";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import "../Styles/AdminStudentTable.css";

const KaMedTable = () => {
    const navigate = useNavigate();
  return (
    <div className='admin-student-table-container'>
      <h2>Medical Table</h2>
      <div className="kgf-admin-table-flex-container">
        <div className="kgf-admin-table-ckeckbox">
          <input type="checkbox" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-table-ckeckbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-table-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-table-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-table-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-table-delete">
          <button>Delete</button>

        </div>
        <IoFilter />
      </div>
      <div className="kgf-admin-table-add-btn mb-3">
        <button>Add +</button>
      </div>

      <table>
        <thead className='admin-student-table-header'>
         <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Role Type</th>
            <th>Type Of Work</th>
            <th>Blood Group</th>
            <th>District</th>
            <th>Village</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Siva</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>o+</td>
            <td>Hyderabad</td>
            <td>Ameerpet</td>
            <td>
          <button className='atview-btn' onClick={()=> navigate("/admindashboard/ka-med-table-view")}>View</button>
            </td>
          </tr>
        
        </tbody>
      </table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    </div>
  );
}

export default KaMedTable;
