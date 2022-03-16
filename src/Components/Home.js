import React from 'react'
import Course from './Course'

const Home = () => {
  return (
    <>
        <div className="container">
              <div className="row">
                  <div className="col-md-6 mt-4 mb-4">
                      <Course
                          heading="Basics of Programming"
                          acitem1="Basics of Java Programming"
                          acitem2="Basics of Python Programming"
                          acitem3="Basics of C++ Programming"
                          target1="#collapseoneone"
                          target2="#collapseonetwo"
                          target3="#collapseonethree"
                          collapse1="collapseoneone"
                          collapse2="collapseonetwo"
                          collapse3="collapseonethree"
                      />
                  </div>
                  <div className="col-md-6 mt-4 mb-4">
                      <Course
                          heading="Advanced Programming"
                          acitem1="Data Structures and Algorithms"
                          acitem2="Advanced Java Programming"
                          acitem3="Competitive Programming"
                          target1="#collapsetwoone"
                          target2="#collapsetwotwo"
                          target3="#collapsetwothree"
                          collapse1="collapsetwoone"
                          collapse2="collapsetwotwo"
                          collapse3="collapsetwothree"
                      />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6 mt-4 mb-4">
                      <Course
                          heading="Aptitude"
                          acitem1="Aptitude Basics"
                          acitem2="Advanced Aptitude Concepts"
                          acitem3="Aptitude Practice"
                          target1="#collapsethreeone"
                          target2="#collapsethreetwo"
                          target3="#collapsethreethree"
                          collapse1="collapsethreeone"
                          collapse2="collapsethreetwo"
                          collapse3="collapsethreethree"
                      />
                  </div>
                  <div className="col-md-6 mt-4 mb-4">
                      <Course
                          heading="Test Series"
                          acitem1="Programming Test Series"
                          acitem2="Data Structures and Algorithms Test Series"
                          acitem3="Aptitude Test Series"
                          target1="#collapsefourone"
                          target2="#collapsefourtwo"
                          target3="#collapsefourthree"
                          collapse1="collapsefourone"
                          collapse2="collapsefourtwo"
                          collapse3="collapsefourthree"
                      />
                  </div>
              </div>
        </div>
    </>
  )
}

export default Home