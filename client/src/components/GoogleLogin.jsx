import React from "react";

export default function GoogleLogin() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <button className="btn btn-danger w-100" onClick={handleGoogleLogin}>
      <i className="fab fa-google me-2"></i>Sign in with Google
    </button>
  );
}