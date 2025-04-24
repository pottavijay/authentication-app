const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const router = express.Router();

const mockUser = {
  email: "user@example.com",
  password: bcrypt.hashSync("123456", 8),
};

router.post("/session-login", (req, res) => {
  const { email, password } = req.body;
  if (email !== mockUser.email || !bcrypt.compareSync(password, mockUser.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.user = { email };
  res.json({ message: "Logged in with session" });
});

router.get("/session-profile", (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: "Not logged in" });
  res.json({ user: req.session.user });
});

module.exports = router;
