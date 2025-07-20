// adapters/UserController.js
// Web controller for user registration and login

const express = require('express');
const router = express.Router();
const UserRepository = require('./UserRepository');
const UserService = require('../application/UserService');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

router.post('/register', async (req, res) => {
  const { name, email, password, flatNumber, role } = req.body;
  // TODO: Hash password before saving
  const user = await userService.registerUser({ name, email, passwordHash: password, flatNumber, role });
  res.status(201).json({ id: user.id, name: user.name, email: user.email, flatNumber: user.flatNumber, role: user.role });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // TODO: Verify password hash
  const user = await userService.authenticate(email, password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ id: user.id, name: user.name, email: user.email, flatNumber: user.flatNumber, role: user.role });
});

module.exports = router;
