import React, { useState } from "react";
import axios from "axios";

export default function JwtLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/jwt-login", { email, password });
      localStorage.setItem("jwtToken", res.data.token);
      setMessage("✅ Logged in successfully with JWT!");
    } catch (err) {
      setMessage("❌ Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        <i className="fas fa-sign-in-alt me-2"></i>Login with JWT
      </button>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </form>
  );
}