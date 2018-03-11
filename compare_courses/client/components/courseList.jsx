import React from 'react';
import Course from './course.jsx';
import { Collapse } from 'react-collapse';

export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 515,
      expanded: false,
    };
    this.accordian = this.accordian.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  accordian() {
    let expanded = !this.state.expanded;
    this.setState({
      height: expanded ? 1135 : 515,
      expanded: expanded,
    });
  }

  collapse() {
    if (this.state.expanded) this.accordian();
  }

  render() {
    return (
      <div>
        <Collapse isOpened={true} fixedHeight={this.state.height}>
          <div className="course-list">
            {this.props.courses.map(course => (
              <Course
                key={course.id}
                course={course}
                onclick={id => {
                  this.props.onclick(id);
                  this.collapse();
                }}
              />
            ))}
            <div className="view-more-container">
              <button className="view-more-btn" onClick={this.accordian}>
                {this.state.expanded ? '- View Less' : '+ View More'}
              </button>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

// export default CourseList;
