// adapters/UserController.js
// Web controller for user registration and login

const express = require('express');
const router = express.Router();
const UserRepository = require('./UserRepository');
const UserService = require('../application/UserService');
const bcrypt = require('bcryptjs');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

router.post('/register', async (req, res) => {
  const { name, email, password, flatNumber, role } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await userService.registerUser({ name, email, passwordHash, flatNumber, role });
  res.status(201).json({ id: user.id, name: user.name, email: user.email, flatNumber: user.flatNumber, role: user.role });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.authenticate(email, password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ id: user.id, name: user.name, email: user.email, flatNumber: user.flatNumber, role: user.role });
});

module.exports = router;
