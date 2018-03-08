import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faStar from "@fortawesome/fontawesome-free-solid/faStar";

export function Stars(props) {
  var rating = props.rating;
  var remainder = rating - Math.floor(rating);
  var percent = 0;
  if (remainder) {
    percent = `${remainder / 1 * 100}%`;
  }
  var starArr = [];
  for (var i = 1; i < 6; i++) {
    if (rating > i || rating === i)
      starArr.push(
        <FontAwesomeIcon icon={faStar} className="starFill" key={i} />
      );
    if (i > rating && i - rating < 1) {
      starArr.push(
        <FontAwesomeIcon
          icon={faStar}
          className="starFill"
          width={percent}
          key={i}
        />
      );
    }
    if (i > rating && i - rating > 1) {
      starArr.push(<FontAwesomeIcon icon={faStar} className="stars" key={i} />);
    }
  }
  return <div>{starArr}</div>;
}
