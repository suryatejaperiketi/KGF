import React from "react";
import "../Styles/EmployeeViewDashboard.css";
import { LuArrowBigLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function EmployeeViewDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <section className="dash-emp-section">
        <div className="dash-emp-title">
          <h3>Employee Responses</h3>
        </div>
        <div className="dash-emp-header">
          <LuArrowBigLeft
            className="dash-emp-left-arrow"
            onClick={() => navigate(-1)}
          />
          <h4>Jobs</h4>
        </div>

        <div className="dash-emp-view-flex-container">
          <div className="dash-emp-view-left">
            <div className="dash-emp-view-trainer">
              <h5>Trainer</h5>
            </div>
          </div>

          <div className="dash-emp-view-right">
            <div className="dash-emp-view-resp">
              <button>All Responses 20</button>
            </div>
            <div className="dash-emp-view-short">
              <button>Shortlist 5</button>
            </div>
            <div className="dash-emp-view-rej">
              <button>Rejected 5</button>
            </div>
          </div>
        </div>

        <div className="dash-emp-view-flex-2">
          <div className="dash-emp-check-list">
            <input type="checkbox" />
            <label>Email</label>
          </div>

          <div className="dash-emp-check-list">
            <input type="checkbox" />
            <label>WhatsApp</label>
          </div>

          <div className="dash-emp-send-btn">
            <button>SEND</button>
          </div>

          <div className="dash-emp-short-btn">
            <button>Shortlist</button>
          </div>

          <div className="dash-emp-rej-btn">
            <button>Rejected</button>
          </div>

          <div className="dash-emp-search-inp">
            <input type="text" placeholder="Search by mail name......" />
            <button>Search</button>
          </div>
        </div>

        <table>
          <thead className="admin-jobs-header">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Qualification</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="admin-jobs-body">
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Surya</td>
              <td>surya123@gmail.com</td>
              <td>1</td>
              <td>BTech</td>
              <td style={{color:"green", fontWeight:"bold"}}>Shortlisted</td>
              <td>
                <button onClick={()=> navigate("/dashboard/application-form-preview")} className="dash-emp-view-btn">
                  View
                </button>
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
      </section>
    </>
  );
}

export default EmployeeViewDashboard;
