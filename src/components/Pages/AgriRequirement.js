import React from 'react'
import "../Styles/AgriRequirement.css"

function AgriRequirement() {
  return (
    <>
    <section className='kgf-agri-req-section'>
         
        <div className="kgf-agri-req-inputs">
          <div>
            <label className="kgf-agri-req-form-label">
              Requirement / Quantity
            </label>
            <input
              type="text"
              className="kgf-agri-req-form-control"
              placeholder="Search by Requirement / Quantity"
            />
          </div>
          <div>
            <label className="kgf-agri-req-form-label">Name</label>
            <input
              type="text"
              className="kgf-agri-req-form-control"
              placeholder="Search by Name"
            />
          </div>
          <div>
            <label className="kgf-agri-req-form-label">City / State</label>
            <input
              type="text"
              className="kgf-agri-req-form-control"
              placeholder="Search by City / State"
            />
          </div>
        </div>
        <div className="kgf-agri-req-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Requirement</th>
                <th>Quantity</th>
                <th>City/Village</th>
                <th>State</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RAJ</td>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>RAJ</td>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>RAJ</td>
                <td>Tractor</td>
                <td>01</td>
                <td>Kurnool</td>
                <td>AP</td>
                <td>India</td>
                <td>
                  <select>
                    <option>Select</option>
                    <option>OPEN</option>
                    <option>CLOSE</option>
                  </select>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
    </section>
    </>
  )
}

export default AgriRequirement