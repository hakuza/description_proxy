import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Feedback} from "./feedback.jsx";
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
    if (this.state.reviews === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Featured reviews={this.state.reviews} id={this.state.id}/>
        <Feedback reviews={this.state.reviews} id={this.state.id}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Feedback/>, document.getElementById("feedback"));

window.Feedback = Feedback;
