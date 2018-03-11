import React from 'react';
import ReactShallowRenderer from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Compare from '../../client/index.jsx';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

test('test test', () => {
  expect(1 + 1).toEqual(2);
});

// test('should render Compare correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Compare />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
