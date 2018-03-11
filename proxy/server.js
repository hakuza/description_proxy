const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/load', (req, res) => {
  request('http://expanded:3005/load').pipe(res);
});

app.get('/description', (req, res) => {
  request('http://description:3001/description').pipe(res);
});

app.get('/feedback', (req, res) => {
  request('http://feedback:3002/feedback', {qs: req.query}).pipe(res);
});

app.get('/courses', (req, res) => {
  request('http://payment:3003/courses').pipe(res);
});

app.get('/compare', (req, res) => {
  request('http://compare:3004/compare', {qs: req.query}).pipe(res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});