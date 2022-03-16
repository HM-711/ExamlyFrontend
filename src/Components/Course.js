import React from 'react'

const Course = (props) => {
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
    </div>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={props.target1} aria-expanded="true" aria-controls="collapseOne">
                          {props.acitem1}
                      </button>
                  </h2>
                  <div id={props.collapse1} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <div className="calstart my-2">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Starts: Mon, January 1, 2022</span>
                          </div>
                          <div className="calend my-2 mb-4">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Ends: Mon, June 1, 2022</span>
                          </div>
                          <div className="timegrade my-2 mb-4">
                              <i className="fa-solid fa-clock mx-2"></i>
                              <span className="mx-2">100 Questions</span>
                              <i className="fa-solid fa-file-lines mx-2"></i>
                              <span className="mx-2">3 Practice Tests</span>
                              <i className="fa-solid fa-file-zipper mx-2"></i>
                              <span className="mx-2">5 Assessments</span>
                          </div>
                          <div className="enrolled my-2 mb-4">
                              <i className="fa-solid fa-user mx-2"></i>
                              <span className="mx-2">Enrolled, Not Started</span>
                          </div>
                          <button className="btn btn-success my-2">Start Course</button>
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target2} aria-expanded="false" aria-controls="collapseTwo">
                          {props.acitem2}
                      </button>
                  </h2>
                  <div id={props.collapse2} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <img className="my-2 mb-4" src="../img.jpeg" alt="Course" />
                          <div className="calstart my-2">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Starts: Mon, January 1, 2022</span>
                          </div>
                          <div className="calend my-2 mb-4">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Ends: Mon, June 1, 2022</span>
                          </div>
                          <div className="timegrade my-2 mb-4">
                              <i className="fa-solid fa-clock mx-2"></i>
                              <span className="mx-2">100 Questions</span>
                              <i className="fa-solid fa-file-lines mx-2"></i>
                              <span className="mx-2">3 Practice Tests</span>
                              <i className="fa-solid fa-file-zipper mx-2"></i>
                              <span className="mx-2">5 Assessments</span>
                          </div>
                          <div className="enrolled my-2 mb-4">
                              <i className="fa-solid fa-user mx-2"></i>
                              <span className="mx-2">Enrolled, Not Started</span>
                          </div>
                          <button className="btn btn-success my-2">Start Course</button>
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target3} aria-expanded="false" aria-controls="collapseThree">
                          {props.acitem3}
                      </button>
                  </h2>
                  <div id={props.collapse3} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <img className="my-2 mb-4" src="../img.jpeg" alt="Course" />
                          <div className="calstart my-2">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Starts: Mon, January 1, 2022</span>
                          </div>
                          <div className="calend my-2 mb-4">
                              <i className="fa-solid fa-calendar mx-2"></i>
                              <span className="mx-2">Ends: Mon, June 1, 2022</span>
                          </div>
                          <div className="timegrade my-2 mb-4">
                              <i className="fa-solid fa-clock mx-2"></i>
                              <span className="mx-2">100 Questions</span>
                              <i className="fa-solid fa-file-lines mx-2"></i>
                              <span className="mx-2">3 Practice Tests</span>
                              <i className="fa-solid fa-file-zipper mx-2"></i>
                              <span className="mx-2">5 Assessments</span>
                          </div>
                          <div className="enrolled my-2 mb-4">
                              <i className="fa-solid fa-user mx-2"></i>
                              <span className="mx-2">Course Incomplete</span>
                          </div>
                          <button className="btn btn-warning my-2">Resume Course</button>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Course