import React from "react";
import { Reviews } from "./../client/src/reviews";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

configure({ adapter: new Adapter() });
// The mount function is used to render our component and then
// allow us to inspect the output and make assertions on it.

const dummyData = {
  364426: [
    {
      _class: "course_review",
      id: 14205914,
      title: "",
      content: "THIS IS A TEST",
      rating: 4.5,
      created: "2018-02-27T11:38:22Z",
      modified: "2018-02-27T16:12:36Z",
      user: {
        _class: "user",
        id: 44791238,
        title: "EQUUS BASS 770",
        name: "EB770",
        display_name: "EQUUS BASS 770"
      }
    }
  ]
};

test("Reviews component renders the reviews list", () => {
  const wrapper = mount(<Reviews reviews={dummyData} id={364426} />);

  const p = wrapper.find(".indivReviews");

  expect(p.text()).toBe("THIS IS A TEST");
});
