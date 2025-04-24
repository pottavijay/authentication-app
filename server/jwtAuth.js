const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

const SECRET = "jwt_secret"; // store in .env in production

const mockUser = {
  email: "user@example.com",
  password: bcrypt.hashSync("123456", 8),
};

router.post("/jwt-login", (req, res) => {
  const { email, password } = req.body;
  if (email !== mockUser.email || !bcrypt.compareSync(password, mockUser.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
