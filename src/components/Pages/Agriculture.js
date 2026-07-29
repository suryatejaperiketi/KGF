import React, { useState } from "react";
import "../Styles/Agriculture.css";
import AgriRequirement from "./AgriRequirement";
import AgriMyRequirement from "./AgriMyRequirement";

function Agriculture() {
  const [activeTab, setActiveTab] = useState("requirement");

  return (
    <section className="agriculture-section">
      <div className="agriculture-container">
        <h3>Agriculture</h3>
        
        <div className="kgf-agri-req">
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
          {activeTab === "requirement" ? (
            <AgriRequirement />
          ) : (
            <AgriMyRequirement />
          )}
        </div>
      </div>
    </section>
  );
}

export default Agriculture;