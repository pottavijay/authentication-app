// index.js
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(session({ secret: "session_secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Mock database for users (this should be replaced with a real database in production)
const users = [
    { email: "test@example.com", password: "password123" }
];

// Import the routes for different authentication methods
app.use("/", require("./jwtAuth"));
app.use("/", require("./sessionAuth"));
app.use("/", require("./oauth2Auth"));  // Ensure this is loaded after passport is initialized

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
