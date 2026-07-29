import React from 'react'
import "../Styles/jobsstatus.css";

function JobsStatus() {
  return (
    <section className='jobs-status'>
    <div className='container'>
   <div className="stu-filters-box">
        <input
          type="text"
          placeholder="Search Job Title"
          className="stu-filter-input"/>


           <select
          className="stu-filter-input">
          <option value="">Experience</option>
          <option value="Pending">Fresher</option>
          <option value="Shortlisted">Experience</option>
          
        </select>

        <select
          className="stu-filter-input">
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button className="job-apply-btn">
          Apply
        </button>

        <button className="job-delete-btn">
          Delete
        </button>
      </div>


       <div className="admin-blood-donor-table-data">
        <table>
          <thead className="admin-blood-donor-header">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Applied For</th>
              <th>E mail</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="admin-blood-donor-table-body">
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Software Engineer</td>
              <td>rahul@example.com</td>
              <td>2-2.5 LPA</td>
              <td>3 Years</td>
              <td>Pending</td>
              <td>
                <button
                  className="kgf-admin-view-btn">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>HR Manager</td>
              <td>priya@example.com</td>
              <td>2-2.5 LPA</td>
              <td>6 Years</td>
              <td>Shortlisted</td>
              <td>
                <button
                  className="kgf-admin-view-btn">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>

    

    </section>
  )
}

export default JobsStatus