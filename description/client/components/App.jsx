import React from 'react';
import axios from 'axios';
import Feedback from './Feedback.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faComment, faClosedCaptioning} from '@fortawesome/fontawesome-free-solid';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: [],
      currentCourse: {}
    };
  }

  componentWillMount() {
    axios
      .get('/description')
      .then(response => {
        this.setState({course: response.data, currentCourse: response.data[16]});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="streamer">
        <div id="container">
          <h1 className="streamer_text" id="title">{this.state.currentCourse.title}</h1>
          <h2 className="streamer_text">{this.state.currentCourse.headline}</h2>
          <Feedback currentCourse={this.state.currentCourse}/>
          <div id="by_line">
            <h4 className="row_items streamer_text">
              Created by {this.state.currentCourse.name}
            </h4>
            <h4 className="row_items streamer_text">
              Last Updated{' '} {new Date(this.state.currentCourse.created).toDateString()}
            </h4>
            <h4 className="row_items streamer_text">
              <span className="row_span"><FontAwesomeIcon icon={faComment}/></span>English</h4>
            <h4 className="row_items streamer_text">
              <span className="row_span"><FontAwesomeIcon icon={faClosedCaptioning}/></span>English</h4>
          </div>
        </div>
      </div>
    );
  }
}
