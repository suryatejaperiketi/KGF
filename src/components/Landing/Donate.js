import React from 'react'
import "../Styles/donate.css";
import DonateQrCode from "../../assets/Amountqr.png";
import gpay from "../../assets/gpay.png";
import phonepe from "../../assets/phonepe.png";
import paytm from "../../assets/Paytm.png";

function Donate() {
  return (
    <section className='donate-section mb-4' id='donate'>
        <div className="container text-center">    
            <h2 className='donate-title'>DONATE</h2>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12'>
                  <div className='account-details'>
                      Account Name: <span className='donate-span'>KGF FUNDS</span>
                    <br/>
                    Account Number: <span className='donate-span'>123000054967</span>
                    <br/>
                    IFSC CODE: <span className='donate-span'>SBIN0001234</span>
                    <br/>
                    Branch Name: <span className='donate-span'>STATE BANK OF INDIA</span>
                    <br/>
                    Branch Location: <span className='donate-span'>HYDERABAD</span>
                    <br/>
                    <br/>
                    
                    <span className='donate-span'>Your contribution helps us make a real impact.Thank you for supporting❤️</span>

                    </div>
                    <div className='donate-upi-apps mt-4 mb-3'>
                      <img src={gpay} alt="Donate Now"/>
                    <img src={phonepe} alt="Donate Now"/>
                    <img src={paytm} alt="Donate Now"/>
                    </div>
                        </div>
                <div className='col-lg-6 col-md-12'>
                   <div className='donate-qr mb-3'>
                     <img src={DonateQrCode} alt="Donate Now" className='donate-img' />
                    </div>
                    </div> 
            </div>
        </div>
    </section>
  )
}

export default Donate