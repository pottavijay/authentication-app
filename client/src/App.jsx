import React from "react";
import JwtLogin from "./components/JwtLogin";
import SessionLogin from "./components/SessionLogin";
import GoogleLogin from "./components/GoogleLogin";

export default function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        <i className="fas fa-lock me-2"></i>Authentication Demo
      </h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <i className="fas fa-key me-2"></i>JWT Login
            </div>
            <div className="card-body">
              <JwtLogin />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <i className="fas fa-cookie me-2"></i>Session Login
            </div>
            <div className="card-body">
              <SessionLogin />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-danger text-white">
              <i className="fab fa-google me-2"></i>OAuth2 Login
            </div>
            <div className="card-body text-center">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}