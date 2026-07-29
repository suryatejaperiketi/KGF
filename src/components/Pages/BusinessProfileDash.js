import React from 'react'
import '../Styles/BusinessProfileDash.css'

function BusinessProfileDash() {
  return (
    <>
    <section className='kgf-busi-prof-section'>
        <div className="kgf-busi-prof-inputs">
          <div>
            <label className="kgf-busi-prof-form-label">
              Company Name
            </label>
            <input
              type="text"
              className="kgf-busi-prof-form-control"
              placeholder="Search by Company Name"
            />
          </div>
          <div>
            <label className="kgf-busi-prof-form-label">Name</label>
            <input
              type="text"
              className="kgf-busi-prof-form-control"
              placeholder="Search by Name"
            />
          </div>
          <div>
            <label className="kgf-busi-prof-form-label">City / State</label>
            <input
              type="text"
              className="kgf-busi-prof-form-control"
              placeholder="Search by City / State"
            />
          </div>
        </div>
        <div className="kgf-busi-prof-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company Name</th>
                <th>Business Type</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
            
              </tr>
            </thead>
            <tbody className='busi-dash-body'>
              <tr>
                <td>RAJ</td>
                <td>YSK Pvt Ltd</td>
                <td>IT</td>
                <td>Hyderabad</td>
                <td>TG</td>
                <td>INDIA</td>
              </tr>

               <tr>
                <td>RAJ</td>
                <td>YSK Pvt Ltd</td>
                <td>IT</td>
                <td>Hyderabad</td>
                <td>TG</td>
                <td>INDIA</td>
              </tr>

             <tr>
              <td>&ensp;</td>
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
            </tr>

            <tr>
              <td>&ensp;</td>
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
            </tr>
              
            </tbody>
          </table>
        </div>
    </section>
    </>
  )
}

export default BusinessProfileDash