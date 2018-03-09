import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Feedbacks} from "./feedback.jsx";
import {Featured} from "./featured_review.jsx";
import "./styles.css";

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      id: 0
    };
  }

  componentWillMount() {
    axios
      .get("/feedback", {
      data: {
        id: window
          .location
          .pathname
          .slice(1)
      }
    })
      .then(res => {
        const data = {};
        res
          .data
          .map(elem => {
            data[elem.courseId] = elem.reviews;
          });
        console.log(data);
        this.setState({reviews: data, id: res.data[4].courseId});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let view;
    if (this.state.reviews === null) {
      view = <h1>Loading...</h1>;
    } else {
      view = <div>
        <Featured reviews={this.state.reviews} id={this.state.id}/>
        <Feedbacks reviews={this.state.reviews} id={this.state.id}/>
      </div>
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

ReactDOM.render(
  <Feedback/>, document.getElementById("feedback"));

window.Feedback = Feedback;
