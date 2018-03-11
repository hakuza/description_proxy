import React from 'react';
import _ from 'lodash';

function Course({ course, onclick }) {
  return (
    <div className="course-container" onClick={onclick.bind(null, course.id)}>
      <div className="curr-course">THIS COURSE</div>
      <div className="course">
        <img className="thumbnail" src={course.thumbnail_url} />
        <div className="course-info">
          <div className="title">
            <div className="course-title">{_.unescape(course.title)}</div>
            <div className="updated-at">
              {'Updated ' +
                new Date(course.updated_at).getMonth() +
                '/' +
                new Date(course.updated_at).getFullYear()}
            </div>
          </div>
          <div className="details">
            <div className="rating">
              <i className="fas fa-star" />
              {course.avg_rating}
            </div>
            <div className="num-subs">
              <i className="far fa-user" />
              {course.num_subs}
            </div>
            <div className="price">{course.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
