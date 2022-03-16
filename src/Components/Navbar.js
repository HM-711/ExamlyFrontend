import React from 'react'
import Profile from './Profile'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">VIT-Bhopal</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className={`nav-link ${location.pathname === "/" ? "active" : " "}`} aria-current="page" to="/">Courses</Link>
                          </li>
                          <li className="nav-item">
                              <Link className={`nav-link ${location.pathname === "/leaderboard" ? "active" : " "}`} to="/leaderboard">Leaderboard</Link>
                          </li>
                          <li className="nav-item">
                              <Link className={`nav-link ${location.pathname === "/login" ? "active" : " "}`} to="/login">Login</Link>
                          </li>
                      </ul>
                      <button className="btn btn-primary mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasbadge" aria-controls="offcanvasbadge">Badge Details</button>
                      <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Profile</button>
                  </div>
              </div>
          </nav>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasbadge" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">User's Name</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                  <div className="prof mb-4">
                      <i className="fa-solid fa-book fa-xl"></i>
                      <span className="mx-2">Courses Enrolled: <strong>10</strong></span>
                  </div>
                  <div className="prof mb-4">
                      <i className="fa-solid fa-percent fa-xl"></i>
                      <span className="mx-2">Courses Completed: <strong>0</strong></span>
                  </div>
                  <div className="prof mb-4">
                      <i className="fa-solid fa-certificate fa-xl"></i>
                      <span className="mx-2">Superbadges: <strong>100</strong></span>
                  </div>
                  <div className="prof mb-4">
                      <i className="fa-solid fa-id-badge fa-xl"></i>
                      <span className="mx-2">Badges: <strong>200</strong></span>
                  </div>
              </div>
          </div>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">User's Name</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                  <Profile/>
              </div>
          </div>
    </>
  )
}

export default Navbar