import React from 'react'
import msgicon from "../../assets/msgicon.png";
import { IoMdDownload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import "../Styles/AdminStTbleView.css";

function ApFlmIndustryView() {
  const navigate = useNavigate();
  return (
    <div className='Admin-student-table-view'>
      <h1>Film Industry</h1>

    
     <div className="kgf-admin-table-flex-container">
        <div className="kgf-admin-table-ckeckbox">
          <input type="checkbox" />
          <label>WhatsApp</label>
        </div>
        <div className="kgf-admin-table-ckeckbox">
          <input type="checkbox" />
          <img src={msgicon} alt="img" />
          <label>Email</label>
        </div>
        <div className="kgf-admin-table-send-btn">
          <button>Send</button>
        </div>
        <div className="kgf-admin-table-search">
          <input type="text" placeholder="Search by Event location......" />
          <button>Search</button>
        </div>
        <div className="kgf-admin-table-download">
          <button>
            <IoMdDownload /> Download
          </button>
        </div>
        <div className="kgf-admin-table-delete">
          <button>Delete</button>

        </div>
        <IoFilter />
      </div>
      <div className="kgf-admin-table-add-btn mb-2">
        <button>Add +</button>
      </div>

    
      <div className="student-view-card">
        <div className="student-card-header">
          <IoArrowBackCircle className="back-icon" onClick={()=> navigate((-1))} />
          <h3>Surya</h3>
        </div>

        <div className="student-profile-top">
          <div className="student-details-grid">

            <p><span>Date of Birth :-</span> 22-5-2000</p>
            <p><span>Gender :-</span> Male</p>

            <p><span>Marital Status :-</span> Unmarried</p>
            <p><span>Blood Group :-</span> A+</p>

            <p><span>Mail-Id :-</span> kishore@gmail.com</p>
            <p><span>Mobile Number :-</span> 1234567890</p>

            <p><span>Religion :-</span> Hindu</p>
            <p><span>Father Name :-</span> Krishna</p>

            <p><span>Whatsapp Number :-</span> 1234567890</p>
            <p><span>Kulam :-</span> Pedda Kamma</p>

            <p><span>Gothram :-</span> Attaluri</p>
            <p><span>Blood Donor :-</span> Yes</p>
          
          </div>
           <div className="student-image-box">
            <img src="https://hyderabadittrainings.com/images/course/react%20js%20training%20banner.webp" alt="student" />
          </div>

        </div>

        
  
        <div className="double-section">

          <div className="info-box">
            <h4>RESIDENTIAL STATUS</h4>
            <p><span>State :-</span> Andhra Pradesh</p>
            <p><span>District :-</span> Kurnool</p>
            <p><span>Town/Village :-</span> Kurnool</p>
            <p><span>Pincode :-</span> 523105</p>
          </div>

          <div className="info-box">
            <h4>CURRENT ADDRESS</h4>
            <p><span>State :-</span> Andhra Pradesh</p>
            <p><span>District :-</span> Kurnool</p>
            <p><span>Town/Village :-</span> Kurnool</p>
            <p><span>Pincode :-</span> 523105</p>
          </div>

        </div>

      
        <div className="double-section">

          <div className="info-box">
            <h4>PROFESSIONAL STATUS</h4>
            <p><span>Occupation :-</span>Film Industry</p>
            <p><span>Type of Work :-</span>Side Character</p>
          </div>


          <div className="info-box">
            <h4>&nbsp;</h4>
            <p><span>Role Type :-</span>Artist</p>
          </div>

        </div>

        <div className="bottom-line">
          <p>
            <span>Have you previously registered with any other community organization :-</span> yes
          </p>
  
        </div>

      </div>        
    </div>
  )
}

export default ApFlmIndustryView;

