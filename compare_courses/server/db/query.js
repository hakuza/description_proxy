const _ = require('lodash');

exports.getSimilarCourseIDs = courseID =>
  `
    SELECT course2_id 
    FROM similar_courses
    WHERE course1_id = ${courseID}
  `;

exports.getCourse = courseID =>
  `
  SELECT
    id,
    title, 
    avg_rating, 
    num_subs, 
    price, 
    thumbnail_url,
    updated_at
  FROM courses
  WHERE id = ${courseID}
  `;

exports.insertCourse = item =>
  `
    INSERT INTO courses (
      title, 
      avg_rating, 
      num_subs, 
      price, 
      thumbnail_url,
      updated_at
    )
    VALUES (
      "${_.escape(item.title)}",
      "${item.avg_rating}",
      "${item.num_subscribers}",
      "${item.price}",
      "${item.image_125_H}",
      "${item.created}"
    )
  `;

exports.insertSimilar = (course1_id, course2_id) =>
  `
    INSERT INTO similar_courses
    VALUES (${course1_id}, ${course2_id})
  `;

// exports.insert = (item) =>
// `
//   INSERT INTO courses (
//     title,
//     avg_rating,
//     num_subs,
//     price,
//     thumbnail_url,
//     updated_at
//   )
//   VALUES (
//     "${item.title}",
//     "${item.avg_rating}",
//     "${item.num_subscribers}",
//     "${item.price}",
//     "${item.image_125_H}",
//     "${item.created}"
//   )
// `
