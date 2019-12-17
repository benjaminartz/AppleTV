// define dependencies
const express = require('express');
const data = require('./data.json');
const app = express();

app.get('/api/data', (req, res) => {
  res.send(data);
})

module.exports = app;
