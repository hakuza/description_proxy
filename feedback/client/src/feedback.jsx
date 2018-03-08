import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Search } from "./reviews_components/search.jsx";
import { Ratings } from "./reviews_components/ratings.jsx";
import { Flag } from "./reviews_components/flag.jsx";
import StarRatings from "react-star-ratings";
import moment from "moment";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id],
      searchResults: props.reviews[props.id],
      input: "",
      header: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStarsClick = this.handleStarsClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value, // store the user input as they type
    });
  }

  handleSearch(e) {
    if (e.key === "Enter" || e.type === "click") {
      this.setState({
        header: this.state.input, // use this state to display the text next to search
      });
      let filteredReviews = this.state.courseReview.filter(review => {
        if (review.content) {
          let input = this.state.input.toLowerCase();
          let content = review.content.toLowerCase();
          let author = review.user.display_name.toLowerCase();
          return content.match(input) || author.match(input);
        }
      });
      let bolded = filteredReviews.map(review => Object.assign({}, review));
      bolded.forEach(review => {
        let input = this.state.input;
        let re = new RegExp(input, "ig");
        console.log(re);
        review.content = review.content.replace(re, "<span>$&</span>");
      });
      this.setState({
        searchResults: bolded,
      });
    }
  }

  handleStarsClick(e) {
    let filteredStarsReviews = this.state.courseReview.filter(review => {
      let rating = Math.floor(review.rating);
      return rating === e;
    });
    this.setState({
      searchResults: filteredStarsReviews,
    });
  }

  render() {
    return (
      <div>
        <div className="title">Student Feedback</div>
        <Ratings
          reviews={this.state.courseReview}
          click={this.handleStarsClick}
        />
        <div className="reviews_container">
          <Search
            search={this.handleSearch}
            header={this.state.header}
            change={this.handleChange}
          />
          <div className="userList">
            {this.state.searchResults.map((elem, i) => {
              if (elem.content) {
                return (
                  <div className="indivContainer" key={i}>
                    <div className="userPicture">
                      <Picture name={elem.user.display_name} />
                    </div>
                    <div className="user" key={i + 1}>
                      <div className="time" key={i + 2}>
                        {moment(elem.created).fromNow()}
                      </div>
                      {elem.user.display_name}
                    </div>
                    <div className="indivReviews" key={i + 3}>
                      <div className="indivRating" key={i + 4}>
                        <StarRatings
                          rating={elem.rating}
                          starRatedColor="#f4c150"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </div>
                      <p className="review-content">
                        {ReactHtmlParser(elem.content)}
                      </p>
                      <Flag />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
