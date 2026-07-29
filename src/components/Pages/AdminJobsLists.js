import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { LuArrowBigLeft } from "react-icons/lu";
import whatsappIcon from "../../assets/whatsApp-icon.png";
import msgicon from "../../assets/msgicon.png";
import "../Styles/AdminJobsLists.css";

function AdminJobsLists() {
  const navigate = useNavigate();
  return (
    <>
      <section className="admin-jobslist-section">
        <h2>Jobs View</h2>
        <div className="kgf-admin-jobslist-flex-container">
          <div className="kgf-admin-jobslist-checkbox">
            <input type="checkbox" />
            <img src={whatsappIcon} alt="img" />
            <label>WhatsApp</label>
          </div>
          <div className="kgf-admin-jobslist-checkbox">
            <input type="checkbox" />
            <img src={msgicon} alt="img" />
            <label>Email</label>
          </div>
          <div className="kgf-admin-jobslist-send-btn">
            <button>Send</button>
          </div>
          <div className="kgf-admin-jobslist-search">
            <input type="text" placeholder="Search by name & company......" />
            <button>Search</button>
          </div>
          <div className="kgf-admin-jobslist-download">
            <button>
              <IoMdDownload /> Download
            </button>
          </div>
          <div className="kgf-admin-jobslist-delete">
            <button>Delete</button>
          </div>
        </div>
        <div className="admin-jobslist-header">
          <LuArrowBigLeft
            className="admin-jobslist-left-arrow"
            onClick={() => navigate(-1)}
          />
          <h4>Surya</h4>
        </div>
        <div className="admin-jobslist-grid">
          <div className="row">
            <div className="admin-jobslist-checkbox">
              <input type="checkbox" />
            </div>

            <div className="admin-jobslist-info">
              <p>
                Company Name :- <strong>YSK Infotech</strong>
              </p>
            </div>

            <div className="admin-jobslist-info">
              <p>
                Job Tittle :- <strong>React Developer</strong>
              </p>
            </div>

            <div className="admin-jobslist-info">
              <p>
                Location :- <strong>Hyderabad</strong>
              </p>
            </div>

            <div className="admin-jobslist-preview-btn">
              <button
                onClick={() =>
                  navigate("/admindashboard/adminjobslists/adminjobpreview")
                }
              >
                Job Preview
              </button>
            </div>
          </div>
          <div className="row">
            <div className="admin-jobslist-approved-btn">
              <button>Approved</button>
            </div>

            <div className="admin-jobslist-responses-btn">
              <button>
                20
                <br />
                All Responses
              </button>
            </div>

            <div className="admin-jobslist-shortlist-btn">
              <button>
                5<br />
                Shortlist
              </button>
            </div>

            <div className="admin-jobslist-reject-btn">
              <button>
                10
                <br />
                Reject
              </button>
            </div>

            <div className="admin-jobslist-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>

        <div className="admin-jobslist-grid">
          <div className="row">
            <div className="admin-jobslist-checkbox">
              <input type="checkbox" />
            </div>

            <div className="admin-jobslist-info">
              <p>
                Company Name :- <strong>YSK Infotech</strong>
              </p>
            </div>

            <div className="admin-jobslist-info">
              <p>
                Job Tittle :- <strong>Python</strong>
              </p>
            </div>

            <div className="admin-jobslist-info">
              <p>
                Location :- <strong>Hyderabad</strong>
              </p>
            </div>

            <div className="admin-jobslist-preview-btn">
              <button
                onClick={() =>
                  navigate("/admindashboard/adminjobslists/adminjobpreview")
                }
              >
                Job Preview
              </button>
            </div>
          </div>
          <div className="row">
            <div className="admin-jobslist-approved-btn">
              <button>Approved</button>
            </div>

            <div className="admin-jobslist-responses-btn">
              <button>All Responses</button>
            </div>

            <div className="admin-jobslist-shortlist-btn">
              <button>Shortlist</button>
            </div>

            <div className="admin-jobslist-reject-btn">
              <button>Reject</button>
            </div>

            <div className="admin-jobslist-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminJobsLists;
