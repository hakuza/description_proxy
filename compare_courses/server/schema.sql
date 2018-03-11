CREATE DATABASE compare;
USE compare;

DROP TABLE IF EXISTS similar_courses;
CREATE TABLE similar_courses (
  course1_id INTEGER NOT NULL,
  course2_id INTEGER NOT NULL,
  PRIMARY KEY (course1_id, course2_id)
);

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  avg_rating DECIMAL (3,2) NOT NULL,
  num_subs INTEGER NOT NULL,
  price VARCHAR(10) NOT NULL,
  thumbnail_url VARCHAR(255) NOT NULL,
  updated_at VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE similar_courses ADD FOREIGN KEY (course1_id) REFERENCES courses (id);
ALTER TABLE similar_courses ADD FOREIGN KEY (course2_id) REFERENCES courses (id);
