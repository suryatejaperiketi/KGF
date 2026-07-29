import React from 'react'
import bloodimg from "../../assets/blood.png";
import "../Styles/bloodgroup.css";


function BloodGroup() {
  return (
    <section className='blood-group-section'>
        <h2>BLOOD GROUPS</h2>
        <div className='container'>
          <div className='row'>
             <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
                <h4>ANDHRA PRADESH</h4>
                <img src={bloodimg} alt='andhra-blood-graph'/>
              </div>
             </div>
              <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
               <h4>TELANGANA</h4>
            <img src={bloodimg} alt='andhra-blood-graph'/>
            </div>
             </div>
          </div>

           <div className='row'>
             <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
                <h4>GUJARAT</h4>
                <img src={bloodimg} alt='andhra-blood-graph'/>
              </div>
             </div>
              <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
               <h4>WORLD WAR</h4>
            <img src={bloodimg} alt='andhra-blood-graph'/>
            </div>
             </div>
          </div>
           <div className='row'>
             <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
                <h4>MAHARASTRA</h4>
                <img src={bloodimg} alt='andhra-blood-graph'/>
              </div>
             </div>
              <div className='col-md-6 col-sm-12'>
              <div className='blood-group-graph-div'>
               <h4>SRI LANKA</h4>
            <img src={bloodimg} alt='andhra-blood-graph'/>
            </div>
             </div>
          </div>

        </div>
    </section>
  )
}

export default BloodGroup