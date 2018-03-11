const db = require('../db');
const queryCreator = require('../db/query.js');
const Promise = require('bluebird');

module.exports = {
  compare: {
    get: function(req, res) {
      // console.log(req.query);
      // req.query = {
      //   id: courseID,
      // };
      db
        .query(queryCreator.getSimilarCourseIDs(req.query.id))
        .then(courseIDs => {
          let dbRequests = courseIDs.map(row =>
            db.query(queryCreator.getCourse(row.course2_id))
          );
          dbRequests.unshift(db.query(queryCreator.getCourse(req.query.id)));
          return Promise.all(dbRequests);
        })
        .then(courses => {
          // console.log(courses);
          res.writeHead(200);
          res.end(JSON.stringify(courses));
        })
        .catch(err => {
          res.writeHead(404);
          res.end(err);
        });
    },
  },
};
