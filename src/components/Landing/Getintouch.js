import React, { useState } from "react";
import "../Styles/getintouch.css";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Getintouch({ closePopup }) {
  const navigate=useNavigate()
  return (
    <div className="popup-overlay">
      <div className="getintouch-section">

        <div className="close-icon" onClick={()=> navigate(-1)}>
          <MdClose size={22} />
        </div>

        <h3 className="getintouch-title">GET IN TOUCH</h3>
        <h5 className="getintouch-para mb-3">Need Assistance? Let’s Get in Touch</h5>

        <form>
          <label>Full Name*</label>
          <input type="text" placeholder="Full Name" required />

          <label>Mobile Number*</label>
          <input type="tel" placeholder="Mobile Number" required />

          <label>Email *</label>
          <input type="email" placeholder="Email" required/>
          

          <label>Category *</label>
          <select>
            <option>Category</option>
            <option>Student</option>
            <option>Farmer</option>
            <option>Business Man</option>
            <option>Doctor</option>
            <option>Employee</option>
            <option>Others</option>
          </select>

          <label>Message *</label>
          <textarea placeholder="Type Your Message"></textarea>

          <button className="submit-btn" type="submit">SEND</button>
        </form>

      </div>
    </div>
  );
}

export default Getintouch;