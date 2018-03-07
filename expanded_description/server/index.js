const express = require('express');
const request = require('request');

const app = express();

app.use(express.static('./public'));

let options = {
  url: 'https://www.udemy.com/api-2.0/courses/364426/?fields[course]=title,headline,num_' +
      'lectures,num_subscribers,created,visible_instructors,avg_rating,price,num_review' +
      's,description',
  headers: {
    Authorization: 'Basic YnFuRUljaHNndUFjdk9MbHlEYUFOa2RJV1d1aXpyOWFldDRzUE5NYzpBVFRkTzB6dW5HeFB4cU' +
        'xtMWlyUWw4Q0VTTlRIaGZ2Vlh3Y3RUckR6cHNRM25zTUF0bnliTUQ2U3hYNHVSMUNQZ0tIcjUyWFdFeT' +
        'ZZendtVUZuRHFVZ3UwTVFPcFpvbjlLODZOTHcwNURha1U1bElrVTZpQ24yZmhKMkhEMlI3Nw==',
    Accept: 'application/json, text/plain, */*'
  }
};
app.get('/load', (req, res) => {
  request(options, (err, response, body) => {
    body = JSON.parse(body);
    // console.log(body.description)
    res.end(body.description);
  });
});

app.listen(3005, () => console.log('listening on port 3005'));