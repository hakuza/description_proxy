var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'hakuza-compare-course.c5vaqsv91pnb.us-west-1.rds.amazonaws.com',
  user: 'student',
  password: 'student',
  database: 'compare',
});

const sendQuery = function(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.connection = connection;
exports.query = sendQuery;
