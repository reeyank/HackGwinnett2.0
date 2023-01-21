import React from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/Footer-Dark-icons.css";
import "../assets/fonts/material-icons.min.css";
import "../assets/fonts/fontawesome-all.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

class pricing extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-md sticky-top py-3"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
                <i className="material-icons">school</i>
              </span>
              <span>GSMST Webmaster</span>
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-2"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-2">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contacts.html">
                    Price Calculator
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary shadow"
                role="button"
                href="signup.html"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
        <section className="py-5">
          <div className="container py-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2 className="fw-bold">Pricing</h2>
                <p className="text-muted">
                  With 2 main options, choose how you want it....
                </p>
              </div>
            </div>
            <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex align-items-md-center align-items-xl-center">
              <div className="col offset-xl-2 mb-4">
                <div className="card bg-dark border-dark">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="fw-bold mb-0">Basic Bundle</h3>
                        <p>Package</p>
                        <h4
                          className="display-4 fw-bold"
                          style={{
                            fontSize: "38px"
                          }}
                        >
                          $100 per pound
                        </h4>
                      </div>
                    </div>
                    <div>
                      <ul className="list-unstyled">
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Lectus ut nibh quam, felis porttitor.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Ante nec venenatis etiam lacinia.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Porta suscipit netus ad ac.</span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="btn btn-primary d-block w-100"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card text-white bg-primary">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="fw-bold text-white mb-0">Pro Bundle</h3>
                        <p>Passenger + Baggage</p>
                        <h4 className="display-4 fw-bold text-white">
                          $10,000
                        </h4>
                      </div>
                      <div>
                        <span className="badge rounded-pill bg-primary text-uppercase bg-semi-white">
                          Best Value
                        </span>
                      </div>
                    </div>
                    <div>
                      <ul className="list-unstyled">
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Lectus ut nibh quam, felis porttitor.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Ante nec venenatis etiam lacinia.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Porta suscipit netus ad ac.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Morbi praesent aptent integer at.</span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-check-lg text-primary"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                          <span>Nisl potenti ut auctor lobortis.</span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="btn btn-primary d-block w-100 bg-semi-white"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-dark" />
      </div>
    );
  }
}

export default pricing;