import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles/clgsschools.css";
import { useNavigate } from "react-router-dom";

function  AdminHospitals() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("government");

  return (
    <section className="collegesschools">
      <h3>HOSPITALS</h3>
      <div className="container">
        <div className="clgsclbox">
          <div
            className={
              activeTab === "government" ? "schhead active-tab" : "schhead"
            }
            onClick={() => setActiveTab("government")}>
            <h4>Government</h4>
          </div>

          <div
            className={
              activeTab === "private" ? "clghead active-tab" : "clghead"
            }
            onClick={() => setActiveTab("private")}>
            <h4>Private</h4>
          </div>
        </div>

        <div className="top-controls">
          <div className="clg-sclsearch">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by HspName, Medical Specializations, village/city"/>
          </div>

          <button
            className="addclg"
            onClick={() =>
              activeTab === "government"
                ? navigate("/admindashboard/addhosform")
                : navigate("/admindashboard/addhosform")
            }>
            {activeTab === "government"
              ? "Add Govt Hospital +"
              : "Add Private Hospital +"}
          </button>
        </div>

        {activeTab === "government" ? (
          <table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th> Specializations</th>
                <th>Phone Number</th>
                <th>Village</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ram Mohan Hospitals</td>
                <td>MultiSpeciality</td>
                <td>9988774455</td>
                <td>Jangareddygudem</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th> Specializations</th>
                <th>Phone Number</th>
                <th>Village</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Revanth Hospitals</td>
                <td>MultiSpeciality</td>
                <td>9988774455</td>
                <td>Jangareddygudem</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default AdminHospitals;
