const express = require('express');
const app = express();
const {getCourses, Udemy} = require('../database/index.js');

app.use(express.static('./public'));

getCourses();
app.get('/description', (request, response) => {
  Udemy.find((err, results) => {
    if (err) {
      getCourses().then(() => Udemy.find((err, results) => {
        if (err) 
          response.send(500);
        else 
          response.json(results);
        }
      ).catch(err => response.send(500)));
    } else {
      response.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
