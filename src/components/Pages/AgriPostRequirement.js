import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "../Styles/AgriPostRequirement.css";

function AgriPostRequirement() {
  const navigate = useNavigate();
  return (
    <>
      <section className="kgf-agri-postreq-container">
        <button className="bloodback" onClick={() => navigate(-1)}>
                  <TiArrowBack /> Back
                </button>
        <h3 className="kgf-agri-postreq-title">Post Requirement</h3>
        <Box sx={{ maxWidth: "100%" }}>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">
              Requirement Title:
            </label>
            <div className="kgf-agri-postreq-inputs">
              <TextField
                sx={{ width: "100%" }}
                placeholder="Requirement Title"
              />
            </div>
          </div>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">
              Requirement Details:
            </label>
            <div className="kgf-agri-postreq-inputs">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Requirement Details"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">Quantity:</label>
            <div className="kgf-agri-postreq-inputs">
              <TextField sx={{ width: "50%" }} placeholder="Quantity" />
            </div>
          </div>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">Name:</label>
            <div className="kgf-agri-postreq-inputs">
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">Mr.</option>
                <option value="2">Ms.</option>
                <option value="3">Mrs.</option>
              </select>
              <TextField sx={{ width: "100%" }} placeholder="First Name" />
              <TextField sx={{ width: "100%" }} placeholder="Last Name" />
            </div>
          </div>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">Location:</label>
            <div className="kgf-agri-postreq-inputs">
              <TextField sx={{ width: "100%" }} placeholder="Village/City" />
              <TextField sx={{ width: "100%" }} placeholder="District" />
              <TextField sx={{ width: "100%" }} placeholder="State" />
              <TextField sx={{ width: "100%" }} placeholder="Pincode" />
            </div>
          </div>
          <div className="kgf-agri-postreq-form">
            <label className="kgf-agri-postreq-form-label">Contact Details:</label>
            <div className="kgf-agri-postreq-inputs">
              <TextField placeholder="Contact" />
              <span className="kgf-agri-postreq-form-label-1">Alternate Number:</span>
              <TextField placeholder="Contact" />
            </div>
          </div>
        </Box>
        <div className="kgf-agri-postreq-btn">
          <button>Post</button>
        </div>
      </section>
    </>
  );
}

export default AgriPostRequirement;
