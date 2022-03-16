import React from 'react'

const Leaderboard = () => {
      return (
            <>
                  <div className="container my-4">
                        <h2 className="text-center mb-4">Course Leaderboard</h2>
                        <table className="table leader">
                              <thead>
                                    <tr className="table-primary align-middle">
                                          <th className="mx-2">Completion</th>
                                          <th className="mx-2">Course Name</th>
                                          <th className="mx-2">Rank</th>
                                          <th className="mx-2">Points</th>
                                          <th className="mx-2">Details</th>
                                    </tr>
                              </thead>
                              <tbody className="my-4">
                                    <tr className="table-success align-middle">
                                          <td>
                                                <div className="progress">
                                                      <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                </div>
                                          </td>
                                          <td>Basics of Java Programming</td>
                                          <td>
                                                <i className="fa-solid fa-trophy"></i>
                                                <span>1000</span>
                                          </td>
                                          <td>
                                                <i className="fa-solid fa-medal"></i>
                                                <span>10000</span>
                                          </td>
                                          <td>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leaderboard</button>
                                          </td>
                                    </tr>
                                    <tr className="table-warning align-middle">
                                          <td>
                                                <div className="progress">
                                                      <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                                </div>
                                          </td>
                                          <td>Basics of Java Programming</td>
                                          <td>
                                                <i className="fa-solid fa-trophy"></i>
                                                <span>1000</span>
                                          </td>
                                          <td>
                                                <i className="fa-solid fa-medal"></i>
                                                <span>10000</span>
                                          </td>
                                          <td>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leaderboard</button>
                                          </td>
                                    </tr>
                                    <tr className="table-danger align-middle">
                                          <td>
                                                <div className="progress">
                                                      <div className="progress-bar" role="progressbar" style={{ "width": "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">10%</div>
                                                </div>
                                          </td>
                                          <td>Basics of Java Programming</td>
                                          <td>
                                                <i className="fa-solid fa-trophy"></i>
                                                <span>1000</span>
                                          </td>
                                          <td>
                                                <i className="fa-solid fa-medal"></i>
                                                <span>10000</span>
                                          </td>
                                          <td>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leaderboard</button>
                                          </td>
                                    </tr>
                                    <tr className="table-info align-middle">
                                          <td>
                                                <div className="progress">
                                                      <div className="progress-bar" role="progressbar" style={{ "width": "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                </div>
                                          </td>
                                          <td>Basics of Java Programming</td>
                                          <td>
                                                <i className="fa-solid fa-trophy"></i>
                                                <span>1000</span>
                                          </td>
                                          <td>
                                                <i className="fa-solid fa-medal"></i>
                                                <span>10000</span>
                                          </td>
                                          <td>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leaderboard</button>
                                          </td>
                                    </tr>
                                    <tr className="table-secondary align-middle">
                                          <td>
                                                <div className="progress">
                                                      <div className="progress-bar" role="progressbar" style={{ "width": "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                                </div>
                                          </td>
                                          <td>Basics of Java Programming</td>
                                          <td>
                                                <i className="fa-solid fa-trophy"></i>
                                                <span>1000</span>
                                          </td>
                                          <td>
                                                <i className="fa-solid fa-medal"></i>
                                                <span>10000</span>
                                          </td>
                                          <td>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Leaderboard</button>
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                    <div className="modal-content">
                                          <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">User's Name</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div className="modal-body">
                                                <table className="table">
                                                      <thead>
                                                            <tr>
                                                                  <th>Name</th>
                                                                  <th>Rank</th>
                                                                  <th>Points</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr>
                                                                  <td>Name1</td>
                                                                  <td>
                                                                        <i className="fa-solid fa-trophy"></i>
                                                                        <span>1</span>
                                                                  </td>
                                                                  <td>
                                                                        <i className="fa-solid fa-medal"></i>
                                                                        <span>10000</span>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>Name2</td>
                                                                  <td>
                                                                        <i className="fa-solid fa-trophy"></i>
                                                                        <span>2</span>
                                                                  </td>
                                                                  <td>
                                                                        <i className="fa-solid fa-medal"></i>
                                                                        <span>9000</span>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>Name3</td>
                                                                  <td>
                                                                        <i className="fa-solid fa-trophy"></i>
                                                                        <span>3</span>
                                                                  </td>
                                                                  <td>
                                                                        <i className="fa-solid fa-medal"></i>
                                                                        <span>8000</span>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>Name4</td>
                                                                  <td>
                                                                        <i className="fa-solid fa-trophy"></i>
                                                                        <span>4</span>
                                                                  </td>
                                                                  <td>
                                                                        <i className="fa-solid fa-medal"></i>
                                                                        <span>7000</span>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>Name5</td>
                                                                  <td>
                                                                        <i className="fa-solid fa-trophy"></i>
                                                                        <span>5</span>
                                                                  </td>
                                                                  <td>
                                                                        <i className="fa-solid fa-medal"></i>
                                                                        <span>6000</span>
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>
                                          </div>
                                          <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      )
}

export default Leaderboard