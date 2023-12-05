require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const { connectMongoDB } = require('./db');

const app = express();
connectMongoDB();





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });