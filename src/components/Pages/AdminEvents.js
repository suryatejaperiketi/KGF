import React from "react";
import msgicon from "../../assets/msgicon.png";
import { IoMdDownload } from "react-icons/io";
import "../Styles/AdminEvents.css";
import {useNavigate} from "react-router-dom"
import whatsappIcon from "../../assets/whatsApp-icon.png"

function AdminEvents() {
const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="kgf-admin-event-heading">
          <h3>Events</h3>
        </div>
        <div className="kgf-admin-event-flex-container">
          <div className="kgf-admin-event-ckeckbox">
            <input type="checkbox" />
            <img src={whatsappIcon} alt="img" />
            <label>WhatsApp</label>
          </div>
          <div className="kgf-admin-event-ckeckbox">
            <input type="checkbox" />
            <img src={msgicon} alt="img" />
            <label>Email</label>
          </div>
          <div className="kgf-admin-event-send-btn">
            <button>Send</button>
          </div>
          <div className="kgf-admin-event-search">
            <input type="text" placeholder="Search by Event location......" />
            <button>Search</button>
          </div>
          <div className="kgf-admin-event-download">
            <button>
              <IoMdDownload /> Download
            </button>
          </div>
          <div className="kgf-admin-event-delete">
            <button>Delete</button>
          </div>
        </div>
        <div className="kgf-admin-event-add-btn">
          <button onClick={() => navigate("/admindashboard/adminAddEvents")}>Add +</button>
        </div>
        <div className="kgf-admin-event-container">
          <div className="kgf-admin-event-data">
            <div className="kgf-admin-event-data-checkbox">
              <input type="checkbox" />
              <label>
                <h3>Kamma Global Summit</h3>
              </label>
              <p>Hyderabad</p>
            </div>
            <div className="kgf-admin-event-preview-btn">
              <button onClick={() => navigate("/admindashboard/adminEventsPreview")}>Event Preview</button>
            </div>
          </div>
          <div className="kgf-admin-event-card-data">
            <div className="kgf-admin-event-responses">
              <button onClick={() => navigate("/admindashboard/adminEventsTable")}>
                50 <br />
                Total Responses
              </button>
            </div>
            <div className="kgf-admin-event-close">
              <button>Closed</button>
              <p>Posted Date :- 13 Dec 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminEvents;
