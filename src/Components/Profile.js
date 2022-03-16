import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="container">
          <div className="prof mb-4">
            <i className="fa-solid fa-location-dot"></i>
            <span className="mx-2">Campus: <small>VIT-Bhopal</small></span>
          </div>
          <div className="prof my-4">
            <i className="fa-solid fa-note-sticky"></i>
            <span className="mx-2">Batch: <small>2023</small></span>
          </div>
          <div className="prof my-4">
            <i className="fa-solid fa-briefcase"></i>
            <span className="mx-2">Department: <small>B.Tech CSE - Cyber Security and Digital Forensics</small></span>
          </div>
          <div className="prof my-4">
            <i className="fa-solid fa-medal"></i>
            <span className="mx-2">Degree: <small>B.Tech CSE - Cyber Security and Digital Forensics</small></span>
          </div>
          <div className="persdet my-4">
              <h3 className="my-3">Personal Details</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <td>User's Name</td>
                </tr>
                <tr>
                  <th>Registration Number</th>
                  <td>User's Reg. No.</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>User's Email</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>User's Phone No.</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>User's Gender</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>User's DOB</td>
                </tr>
              </table>
          </div>
          <div className="acaddet my-4">
              <h3 className="my-3">Academic Details</h3>
              <table>
                <tr>
                  <th>10th</th>
                  <td>User's Percentage</td>
                </tr>
                <tr>
                  <th>12th</th>
              <td>User's Percentage</td>
                </tr>
                <tr>
                  <th>Diploma</th>
              <td>User's Percentage</td>
                </tr>
                <tr>
                  <th>UG</th>
              <td>User's Percentage</td>
                </tr>
                <tr>
                  <th>PG</th>
              <td>User's Percentage</td>
                </tr>
                <tr>
                  <th>Backlog History</th>
                  <td>User's Backlogs</td>
                </tr>
                <tr>
                  <th>Current Backlogs</th>
                  <td>User's Backlogs</td>
                </tr>
                <tr>
                  <th>Interested in Placements</th>
                  <td>Yes/No</td>
                </tr>
              </table>
          </div>
          <div className="adddet my-4">
              <h3 className="my-3">Additional Details</h3>
              <table>
                <tr>
                  <th>Gmail</th>
                  <td>User's Email</td>
                </tr>
                <tr>
                  <th>Receipt Number</th>
              <td>User's RN</td>
                </tr>
                <tr>
                  <th>VITEE Rank</th>
              <td>User's Rank</td>
                </tr>
                <tr>
                  <th>Father's Mobile No.</th>
              <td>User's Father's Mobile No.</td>
                </tr>
                <tr>
                  <th>Mother's Mobile No.</th>
              <td>User's Mother's Mobile No.</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>User's Address</td>
                </tr>
                <tr>
                  <th>UG Institution</th>
                  <td>Vellore Institute of Technology</td>
                </tr>
                <tr>
                  <th>UG University</th>
                  <td>VIT Bhopal</td>
                </tr>
                <tr>
                  <th>UG Year of Passing</th>
                  <td>2023</td>
                </tr>
                <tr>
                  <th>10th Institution</th>
                  <td>User's Institution</td>
                </tr>
                <tr>
                  <th>12th Institution</th>
                  <td>User's Institution</td>
                </tr>
              </table>
          </div>
          <div className="resume my-4">
            <h3 className="my-3">Resume</h3>
            <button className="btn btn-success">
              Upload Resume
            </button>
          </div>
        </div>
    </>
  )
}

export default Profile