import React from "react";
import Footerphone from "../../assets/footerphone.png";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import Getintouch from "./Getintouch";
import getInTouchImg from "../../assets/getintouch.png";
import { useNavigate } from "react-router-dom";

import playstore from "../../assets/playstore.png";
import appstore from "../../assets/applestore.png";

import pic1 from "../../assets/linkedin.png";
import pic2 from "../../assets/facebook.png";
import pic3 from "../../assets/twitter.png";
import pic4 from "../../assets/instagram.png";
import pic5 from "../../assets/youtube.png";
import whatsappicon from '../../assets/whatsApp-icon.png'

import "../Styles/Footer.css";

function Footer() {
const navigate = useNavigate()
  return (
    <section className="footer-section" id="contact">
      <div className="container">
        <div className="row footer-row">

      
          <div className="col-lg-3 text-center mb-4">
            <div className="phone-frame">
              <img src={Footerphone} className="footer-phone" alt="phone" />
            </div>
          </div>

     
          <div className="col-lg-5 mb-4">

            <div className="footer-links-wrapper">

              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Family Tree</li>
                  <li>Gallery</li>
                  <li>Events</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div className="footer-links">
                <h5>Services</h5>
                <ul>
                  <li>Global Networking</li>
                  <li>Knowledge Sharing</li>
                  <li>KGF Skills & Training</li>
                  <li>Blood Donors</li>
                </ul>
              </div>

              <div className="footer-links">
                <h5>Support</h5>
                <ul>
                  <li>Medical</li>
                  <li>Social Service</li>
                  <li>Counselling</li>
                  <li>Legal Advisers</li>
                  <li>NRI Integration</li>
                  <li>Ceremonies & Rituals</li>
                </ul>
              </div>

            </div>

            <div className="download-section">
              <h3>Download KGF APP</h3>

              <div className="store-buttons">
                <img src={playstore} alt="playstore" />
                <img src={appstore} alt="appstore" />
                <img src={Logo} className="footer-logo" alt="logo" />
              </div>
            </div>

          </div>

         
          <div className="col-lg-4 contact-column">
            <h2 className="contact-title">CONTACT US</h2>

            <p><IoCallSharp /> +91 9055517555</p>

            <p><MdMarkEmailRead /> info@kammaglobal.com</p>

            <p>
              <IoLocationSharp /> Jetti Mansion, Plot No 831/A <br />
              Road No 41, Jubilee Hills <br />
              Hyderabad 500033, Telangana, India
            </p>

            <div className="follow-us">
              <h5>Follow Us</h5>

              <div className="social-icons">
                <a href="#"><img src={pic1} alt="linkein"/></a>
                <a href="https://www.facebook.com/kammaglobalfederation"><img src={pic2} alt="facebook"/></a>
                <a href="https://x.https://x.com/KammaGlobalKGFcom/KammaGlobalKGF"><img src={pic3} alt="x" /></a>
                <a href="https://www.instagram.com/kammaglobalfederationkgf/"><img src={pic4} alt="instagram" /></a>
                <a href="https://www.youtube.com/@KammaGlobalKGF"><img src={pic5} alt="youtube" /></a>
                <a href="https://www.whatsapp.com/channel/0029VaiYbNRLCoX40QxpZj02"><img src={whatsappicon} alt="whatsapp" /></a>
              </div>
            </div>
          </div>

        </div>
        <div
          className="getintouch-img">
          <img src={getInTouchImg} alt="Get In Touch" onClick={()=>navigate("/getintouch")} />
        </div>
      </div>
    </section>
  );
}

export default Footer;