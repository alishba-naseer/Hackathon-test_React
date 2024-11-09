

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorLoginForm from './DoctorLoginForm';
import PatientLoginForm from './PatientLoginForm';

export default function Navbar({ isLoggedIn, userType, onLogin, onLogout }) {
  const [showDoctorForm, setShowDoctorForm] = useState(false);
  const [showPatientForm, setShowPatientForm] = useState(false);

  const handleDoctorLoginClick = () => setShowDoctorForm(true);
  const handlePatientLoginClick = () => setShowPatientForm(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {isLoggedIn && (
            <span className="navbar-text mx-2">
              {userType.charAt(0).toUpperCase()} -
            </span>
          )}
          <Link className="navbar-brand" to="#">
            Health Care
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            {isLoggedIn && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            )}

            <div className="d-flex ms-lg-auto flex-column flex-lg-row"> {/* Aligns buttons to the right and stacks on mobile */}
              {isLoggedIn ? (
                <button
                  className="btn btn-danger mx-2 my-2 my-lg-0"
                  onClick={onLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-success mx-2 my-2 my-lg-0"
                    onClick={handleDoctorLoginClick}
                  >
                    Doctor Login
                  </button>
                  <button
                    className="btn btn-success mx-2 my-2 my-lg-0"
                    onClick={handlePatientLoginClick}
                  >
                    Patient Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showDoctorForm && (
        <DoctorLoginForm
          onSubmit={(name) => {
            onLogin('doctor', name);
            setShowDoctorForm(false);
          }}
          onClose={() => setShowDoctorForm(false)}
        />
      )}
      {showPatientForm && (
        <PatientLoginForm
          onSubmit={(name) => {
            onLogin('patient', name);
            setShowPatientForm(false);
          }}
          onClose={() => setShowPatientForm(false)}
        />
      )}
    </div>
  );
}
