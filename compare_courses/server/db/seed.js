const mysql = require('mysql');
const rp = require('request-promise');
const db = require('./index.js');
const queryCreator = require('./query.js');
// const request = require('request');
// var Promise = require('bluebird');

// const connection = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'compare'
// });

// const url = 'https://www.udemy.com/api-2.0/courses/?page_size=200&search=programming&ordering=most-reviewed&fields[course]=title,avg_rating,num_subscribers,created,price,num_reviews,image_125_H,url';
const url = 'https://www.udemy.com/api-2.0/courses/';

let options = {
  url: url,
  headers: {
    Authorization:
      'Basic Z2VzQmVZMWlDOWtNSXNZSFZTZGJtYXZ0ZmpJbFFOOWFtaFV3MFZCWjpuOWRxMkRRUFZRSEp3YWZnblBoY1NQWXhIZHJsT2VUUDZTV3VmTUNPcWFCa2k3NnY0THlETlZQUFlYcmRzUDZNS2MxWGxQSjZ4SjVicExjYXRWdUx5OUF3UWZIWUZWWXBxdjFiTWRldVIwdFZSSFJnUG9RRmYya01sRFRGaWNVNw==',
    Accept: 'application/json, text/plain, */*',
  },
  qs: {
    page_size: 200,
    search: 'programming',
    ordering: 'most-reviewed',
    'fields[course]':
      'title,avg_rating,num_subscribers,created,price,num_reviews,image_125_H,url',
  },
};

//seeds courses table with 200 courses
//ordered by most-reviewed
//ids: 1-200

rp(options)
  .then(body => {
    // console.log(body);
    body = JSON.parse(body);
    let options2 = {
      url: body.next,
      headers: options.headers,
    };
    return Promise.all([rp(options2), body.results]);
  })
  .then(([body2, results]) => {
    results = [...results, ...JSON.parse(body2).results];
    console.log(`Got ${results.length} results`);
    // console.log(queryCreator.insert(results[0]));
    let inserts = results.map(item =>
      db.query(queryCreator.insertCourse(item))
    );
    return Promise.all(inserts);
  })
  .then(dbResponse => {
    console.log(`Inserted ${dbResponse.length} rows into courses`);
    return seedSimilar();
  })
  .then(results => {
    console.log(`Inserted ${results.length} rows into similar_courses`);
    console.log('Closing connection');
    db.connection.end();
  })
  .catch(err => {
    throw err;
  });

//seeds similar_courses with random info
//gives each course 10 "similar" courses
const seedSimilar = function() {
  let inserts = [];
  for (let i = 1; i <= 200; i++) {
    for (let j = i; j < i + 10; j++) {
      inserts.push(db.query(queryCreator.insertSimilar(i, j % 200 + 1)));
    }
  }
  return Promise.all(inserts);
};
