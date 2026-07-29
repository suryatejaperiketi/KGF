import React from "react";
import { useNavigate } from "react-router-dom";
import { LuArrowBigLeft } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../Styles/EmployeeDashboard.css";

function EmployeeDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <section className="dash-emp-section">
        <h2 className="dash-emp-title">Employee</h2>
        <div className="dash-emp-header">
          <LuArrowBigLeft
            className="dash-emp-left-arrow"
            onClick={() => navigate(-1)}
          />
          <h4>Jobs</h4>
        </div>
        <div className="dash-emp-all-jobs">
          <p>All Jobs 20</p>
          <span>Pages 1 of 2</span>
        </div>

        <div className="dash-emp-flex-container">
          <div className="dash-emp-left">
            <div className="dash-emp-check">
              <input type="checkbox" />
              <label>Select All</label>
            </div>

            <div className="dash-emp-delete-btn">
              <button>
                <RiDeleteBin5Line /> <span>Delete</span>
              </button>
            </div>

            <div className="dash-emp-search">
              <input type="text" placeholder="Search by Job Tittle......" />
            </div>
          </div>

          <div className="dash-emp-post-btn">
            <button onClick={() => navigate("/dashboard/jobpost")}>
              Post Job
            </button>
          </div>
        </div>

        <div className="dash-emp-grid">
          <div className="dash-emp-row">
            <div className="dash-emp-info">
              <div className="dash-emp-checkbox">
                <input type="checkbox" />
              </div>
              <div className="dash-emp-role">
                <h5>Developer</h5>
                <p>Hyderabad</p>
              </div>
            </div>

            <div className="dash-emp-preview-btn">
              <button onClick={() => navigate("/dashboard/jobpreview")}>
                Job Preview
              </button>
            </div>
          </div>
          <div className="dash-emp-row">
            <div className="dash-emp-approved">
              <p>Approved</p>
            </div>

            <div className="dash-emp-responses-btn">
              <button onClick={() => navigate("/dashboard/employresponses")}>
                20
                <br />
                All Responses
              </button>
            </div>

            <div className="dash-emp-shortlist-btn">
              <button>
                5<br />
                Shortlist
              </button>
            </div>

            <div className="dash-emp-reject-btn">
              <button>
                10
                <br />
                Reject
              </button>
            </div>

            <div className="dash-emp-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>

        <div className="dash-emp-grid">
          <div className="dash-emp-row">
            <div className="dash-emp-info">
              <div className="dash-emp-checkbox">
                <input type="checkbox" />
              </div>
              <div className="dash-emp-role">
                <h5>Backend</h5>
                <p>Hyderabad</p>
              </div>
            </div>

            <div className="dash-emp-preview-btn">
              <button onClick={() => navigate("/dashboard/jobpreview")}>
                Job Preview
              </button>
            </div>
          </div>
          <div className="dash-emp-row">
            <div className="dash-emp-reject">
              <p>Reject</p>
            </div>

            <div className="dash-emp-responses-btn">
              <button onClick={() => navigate("/dashboard/employresponses")}>
                20
                <br />
                All Responses
              </button>
            </div>

            <div className="dash-emp-shortlist-btn">
              <button>
                5<br />
                Shortlist
              </button>
            </div>

            <div className="dash-emp-reject-btn">
              <button>
                10
                <br />
                Reject
              </button>
            </div>

            <div className="dash-emp-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>

        <div className="dash-emp-grid">
          <div className="dash-emp-row">
            <div className="dash-emp-info">
              <div className="dash-emp-checkbox">
                <input type="checkbox" />
              </div>
              <div className="dash-emp-role">
                <h5>React</h5>
                <p>Hyderabad</p>
              </div>
            </div>

            <div className="dash-emp-preview-btn">
              <button onClick={() => navigate("/dashboard/jobpreview")}>
                Job Preview
              </button>
            </div>
          </div>
          <div className="dash-emp-row">
            <div className="dash-emp-reject">
              <p>Reject</p>
            </div>

            <div className="dash-emp-responses-btn">
              <button onClick={() => navigate("/dashboard/employresponses")}>
                20
                <br />
                All Responses
              </button>
            </div>

            <div className="dash-emp-shortlist-btn">
              <button>
                5<br />
                Shortlist
              </button>
            </div>

            <div className="dash-emp-reject-btn">
              <button>
                10
                <br />
                Reject
              </button>
            </div>

            <div className="dash-emp-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>

        <div className="dash-emp-grid">
          <div className="dash-emp-row">
            <div className="dash-emp-info">
              <div className="dash-emp-checkbox">
                <input type="checkbox" />
              </div>
              <div className="dash-emp-role">
                <h6>UI & UX Developer</h6>
                <p>Hyderabad</p>
              </div>
            </div>

            <div className="dash-emp-preview-btn">
              <button onClick={() => navigate("/dashboard/jobpreview")}>
                Job Preview
              </button>
            </div>
          </div>
          <div className="dash-emp-row">
            <div className="dash-emp-approved">
              <p>Approved</p>
            </div>

            <div className="dash-emp-responses-btn">
              <button onClick={() => navigate("/dashboard/employresponses")}>
                20
                <br />
                All Responses
              </button>
            </div>

            <div className="dash-emp-shortlist-btn">
              <button>
                5<br />
                Shortlist
              </button>
            </div>

            <div className="dash-emp-reject-btn">
              <button>
                10
                <br />
                Reject
              </button>
            </div>

            <div className="dash-emp-dates">
              <button>Open</button>
              <p>Posted Date:-13 Dec 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployeeDashboard;
