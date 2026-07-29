import React from "react";
import {useNavigate} from 'react-router-dom'
import "../Styles/BusinessReqDash.css"


function BusinessMyReqDash() {
  const navigate = useNavigate();
  return (
    <>
      <section className='kgf-busi-req-section'>
        <div className="kgf-agri-myreq-header">
          <button className="kgf-agri-myreq-btn" onClick={() => navigate("/dashboard/postrequirement")}>Post Requirement</button>
        </div>
        <div className="kgf-busi-req-inputs">
          <div>
            <label className="kgf-busi-req-form-label">
              Category / Requirement
            </label>
            <input
              type="text"
              className="kgf-busi-req-form-control"
              placeholder="Search by Category / Requirement"
            />
          </div>
          <div>
            <label className="kgf-busi-req-form-label">Name</label>
            <input
              type="text"
              className="kgf-busi-req-form-control"
              placeholder="Search by Name"
            />
          </div>
          <div>
            <label className="kgf-busi-req-form-label">City / State</label>
            <input
              type="text"
              className="kgf-busi-req-form-control"
              placeholder="Search by City / State"
            />
          </div>
        </div>
        <div className="kgf-busi-req-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Requirement</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Status</th>     
              </tr>
            </thead>
            <tbody className='busi-dash-body'>
              <tr>
                <td>Raju</td>
                <td>Electronics</td>
                <td>Bulbs</td>
                <td>Kurnool</td>
                <td>TG</td>
                <td>INDIA</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>

              <tr>
              <td>&ensp;</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>&ensp;</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>&ensp;</td>
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
    </section>
    </>
  );
}

export default BusinessMyReqDash;
