// infrastructure/server.js
// Express server setup and route mounting

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('../adapters/UserController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userController);

app.get('/', (req, res) => {
  res.send('Flat Expenses Tracker API (Hexagonal Architecture)');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
