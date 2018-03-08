import React from "react";

export function Picture(props) {
  var initial = props.name.slice(0, 1);
  for (var i = 0; i < props.name.length; i++) {
    if (props.name[i] === " ") {
      var lastName = props.name[i + 1];
      initial += lastName;
    }
  }
  if (initial.length > 2) {
    var first = initial.slice(0, 1);
    var last = initial.slice(-1);
    initial = first + last;
  }

  return (
    <div className="initial">
      <span className="user_initial">{initial}</span>
    </div>
  );
}
