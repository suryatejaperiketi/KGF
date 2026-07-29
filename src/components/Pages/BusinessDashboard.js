import React from "react";
import { useState } from "react";
import '../Styles/BusinessDashboard.css'
import BusinessProfileDash from "./BusinessProfileDash";
import BusinessReqDash from "./BusinessReqDash";
import BusinessMyReqDash from "./BusinessMyReqDash";
function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState("businessprofil");

  return (
    <>
      <section>
        <div className="agriculture-container">
        <h2>Business</h2>
        
        <div className="kgf-agri-req">
          <div
            className={
              activeTab === "businessprofil"
                ? "agri-tab active-agri-tab"
                : "agri-tab"
            }
            onClick={() => setActiveTab("businessprofil")}
          >
            <h4>Business Profile</h4>
          </div>

          <div
            className={
              activeTab === "requirement"
                ? "agri-tab active-agri-tab"
                : "agri-tab"
            }
            onClick={() => setActiveTab("requirement")}
          >
            <h4>Requirement</h4>
          </div>

          <div
            className={
              activeTab === "myrequirement"
                ? "agri-tab active-agri-tab"
                : "agri-tab"
            }
            onClick={() => setActiveTab("myrequirement")}
          >
            <h4>My Requirement</h4>
          </div>
        </div>

        <div className="agri-content">
          {activeTab === "businessprofil" ? (
            <BusinessProfileDash />
          ) : activeTab === "requirement" ? (
            <BusinessReqDash />
          ) : <BusinessMyReqDash/> }
        </div>
      </div>
      </section>
    </>
  );
}

export default BusinessDashboard;
