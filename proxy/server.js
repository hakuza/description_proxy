const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/load', (req, res) => {
  request('http://expanded:3005/load').pipe(res);
});
app.get('/description', (req, res) => {
  request('http://description:3001/description').pipe(res);
});
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});