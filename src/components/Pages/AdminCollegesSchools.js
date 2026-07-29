import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles/clgsschools.css";
import { useNavigate } from "react-router-dom";

function  AdminCollegesSchools() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("schools");

  return (
    <section className="collegesschools">
    <h3>SCHOOLS & COLLEGES</h3>
      <div className="container">
        <div className="clgsclbox">
          <div
            className={
              activeTab === "schools" ? "schhead active-tab" : "schhead"
            }
            onClick={() => setActiveTab("schools")}
          >
            <h4>Schools</h4>
          </div>

          <div
            className={
              activeTab === "colleges" ? "clghead active-tab" : "clghead"
            }
            onClick={() => setActiveTab("colleges")}
          >
            <h4>Colleges</h4>
          </div>
        </div>

        <div className="top-controls">
          <div className="clg-sclsearch">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by School Name, College Name Specializations, village/city"
            />
          </div>

          <button
            className="addclg"
            onClick={() =>
              activeTab === "schools"
                ? navigate("/admindashboard/addsclform")
                : navigate("/admindashboard/addclgform")
            }
          >
            {activeTab === "schools" ? "Add School +" : "Add College +"}
          </button>
        </div>

        {activeTab === "schools" ? (
          <table>
            <thead>
              <tr>
                <th>School Name</th>
                <th>Classes</th>
                <th>Phone</th>
                <th>Village</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Surya Public School</td>
                <td>1 to 10th</td>
                <td>9988774455</td>
                <td>Jangareddygudem</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>College Name</th>
                <th>Specialization</th>
                <th>Phone</th>
                <th>Village</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ABC College</td>
                <td>B.Tech</td>
                <td>9876543210</td>
                <td>Hyderabad</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default AdminCollegesSchools;
