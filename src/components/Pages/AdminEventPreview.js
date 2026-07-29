import React from "react";
import "../Styles/AdminEventPreview.css"

function AdminEventPreview() {
  return (
    <>
      <section className="kgf-admin-add-event-section">
        <div className="kgf-admin-add-event-title">
          <h3>Event Preview</h3>
        </div>
        <div className="kgf-admin-add-event-grid-container">
          <div className="kgf-admin-add-event-form-content">
            <label className="kgf-admin-add-event-form-label">
              Event Title<span className="kgf-admin-add-event-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-add-event-form-control"
              placeholder="Event Title"
              required
            />
          </div>

          <div className="kgf-admin-add-event-mode">
            <label className="kgf-admin-add-event-form-label">
              Event Mode <span className="kgf-admin-add-event-required">*</span>
            </label>
            <div className="kgf-admin-add-event-radio-group">
              <label>
                <input type="radio" name="maritalStatus" value="Married" />
                In-Person
              </label>
              <label>
                <input type="radio" name="maritalStatus" value="Unmarried" />
                Virtual
              </label>
              <label>
                <input type="radio" name="maritalStatus" value="Divorce" />
                Hybrid
              </label>
            </div>
          </div>

          <div className="kgf-admin-add-event-form-content">
            <label className="kgf-admin-add-event-form-label">
              Organizer Name
              <span className="kgf-admin-add-event-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-add-event-form-control"
              placeholder="Organizer Name"
              required
            />
          </div>

          <div className="kgf-admin-add-event-form-content">
            <label className="kgf-admin-add-event-form-label">
              Speaker Name
              <span className="kgf-admin-add-event-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-add-event-form-control"
              placeholder="Speaker Name"
              required
            />
          </div>

          <div className="kgf-admin-add-event-form-content">
            <label className="kgf-admin-add-event-form-label">
              Speaker Image
              <span className="kgf-admin-add-event-required">*</span>
            </label>
            <input
              type="file"
              className="kgf-admin-add-event-form-control"
              placeholder="Attach Photo"
              style={{ border: "1px solid black", backgroundColor:"white" }}
            />
          </div>

          <div className="kgf-admin-add-event-dates-time-flex">
            <div className="kgf-admin-add-event-form-content">
              <label className="kgf-admin-add-event-form-label">
                Start Date
                <span className="kgf-admin-add-event-required">*</span>
              </label>

              <input
                type="date"
                className="kgf-admin-add-event-form-control"
                placeholder="Date-Month-Year"
                required
              />
            </div>

            <div className="kgf-admin-add-event-form-content">
              <label className="kgf-admin-add-event-form-label">
                End Date<span className="kgf-admin-add-event-required">*</span>
              </label>

              <input
                type="date"
                className="kgf-admin-add-event-form-control"
                placeholder="Date-Month-Year"
                required
              />
            </div>
          </div>

          <div className="kgf-admin-add-event-dates-time-flex">
            <div className="kgf-admin-add-event-form-content">
              <label className="kgf-admin-add-event-form-label">
                Start Time
                <span className="kgf-admin-add-event-required">*</span>
              </label>

              <input
                type="time"
                className="kgf-admin-add-event-form-control"
                placeholder="Date-Month-Year"
                required
              />
            </div>

            <div className="kgf-admin-add-event-form-content">
              <label className="kgf-admin-add-event-form-label">
                End Time<span className="kgf-admin-add-event-required">*</span>
              </label>

              <input
                type="time"
                className="kgf-admin-add-event-form-control"
                placeholder="Date-Month-Year"
                required
              />
            </div>
          </div>

          <div className="kgf-admin-add-event-form-content">
            <label className="kgf-admin-add-event-form-label">
              Location<span className="kgf-admin-add-event-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-admin-add-event-form-control"
              placeholder="Location"
              required
            />
          </div>
        </div>
        <div className="kgf-admin-add-event-submit-btn">
            <button>Update</button>
          </div>
      </section>
    </>
  );
}

export default AdminEventPreview;
