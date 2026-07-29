import React from "react";
import "../Styles/Services.css";

import ap from "../../assets/ap.png";
import ts from "../../assets/tg.png";
import tn from "../../assets/tn.png";
import ww from "../../assets/worldwide.png";

function BloodDonors() {
  return (
    <section className="donor-section" id="blood-donors">
      <div className="donor-slider">
        <button className="arrow left">◀</button>

        <div className="donor-container">
          <h2 className="donor-title">Blood Donors</h2>

          <div className="donor-grid">
            <div className="donor-card">
              {/* <h5>Andhra Pradesh</h5> */}
              <img src={ap} alt="AP" />
            </div>

            <div className="donor-card">
              {/* <h5>Telangana</h5> */}
              <img src={ts} alt="TS" />
            </div>

            <div className="donor-card">
              {/* <h5>Tamil Nadu</h5> */}
              <img src={tn} alt="TN" />
            </div>

            <div className="donor-card">
              {/* <h5>World Wide</h5> */}
              <img src={ww} alt="WW" />
            </div>
          </div>

          <div className="pagination">
            <button className="page-btn">◀</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span>...</span>
            <button className="page-btn">10</button>
            <button className="page-btn">▶</button>
          </div>
        </div>
        <button className="arrow right">▶</button>
      </div>
    </section>
  );
}

export default BloodDonors;
