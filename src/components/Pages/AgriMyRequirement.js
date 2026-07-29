import React from "react";
import {useNavigate} from 'react-router-dom'
import "../Styles/AgriMyRequirement.css"


function AgriMyRequirement() {
  const navigate = useNavigate();
  return (
    <>
      <section className="kgf-agri-req-section">
        
        <div className="kgf-agri-myreq-header">
          <button className="kgf-agri-myreq-btn" onClick={() => navigate("/dashboard/postagrirequirement")}>Post Requirement</button>
        </div>
        <div className="kgf-agri-myreq-inputs">
          <div>
            <label className="kgf-agri-myreq-form-label">
              Requirement / Quantity
            </label>
            <input
              type="text"
              className="kgf-agri-myreq-form-control"
              placeholder="Search by Requirement / Quantity"
            />
          </div>
          <div>
            <label className="kgf-agri-myreq-form-label">Name</label>
            <input
              type="text"
              className="kgf-agri-myreq-form-control"
              placeholder="Search by Name"
            />
          </div>
          <div>
            <label className="kgf-agri-myreq-form-label">City / State</label>
            <input
              type="text"
              className="kgf-agri-myreq-form-control"
              placeholder="Search by City / State"
            />
          </div>
        </div>
        <div className="kgf-agri-myreq-table">
          <table>
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Quantity</th>
                <th>City/Village</th>
                <th>State</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>

               <tr>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>

               <tr>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AgriMyRequirement;
