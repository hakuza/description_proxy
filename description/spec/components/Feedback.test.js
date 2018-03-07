import React from "react";
import ReactShallowRenderer from "react-test-renderer";
import Feedback from "../../client/components/Feedback.jsx";

test("should render Feedback correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Feedback />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
