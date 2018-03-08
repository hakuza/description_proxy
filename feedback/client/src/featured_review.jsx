import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Ratings } from "./reviews_components/ratings.jsx";
import { Flag } from "./reviews_components/flag.jsx";
import StarRatings from "react-star-ratings";
import moment from "moment";

export class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews[props.id],
    };
  }

  componentWillMount() {
    console.log(this.state.haveFeatReview);
    if (!this.state.haveFeatReview) {
      var fiveStarReviews = this.state.reviews.filter(review => {
        return review.content.length > 80 && review.rating === 5;
      });
      var index = Math.floor(Math.random() * fiveStarReviews.length);
      this.setState({
        reviews: fiveStarReviews[index],
      });
    }
  }

  render() {
    return (
      <div>
        <div className="title">Featured Review</div>
        <div className="featured_indivContainer">
          <div className="userPicture">
            <Picture name={this.state.reviews.user.display_name} />
          </div>
          <div className="featured_user_container">
            <div className="featured_user">
              {this.state.reviews.user.display_name}
            </div>
            <div className="indivRating">
              <StarRatings
                rating={this.state.reviews.rating}
                starRatedColor="#f4c150"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="1px"
              />
            </div>
            <div className="time">
              {moment(this.state.reviews.created).fromNow()}
            </div>
          </div>
          <div className="featured_indivReviews">
            {this.state.reviews.content}
            <Flag />
          </div>
        </div>
      </div>
    );
  }
}
