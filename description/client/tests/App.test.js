import { shallow, mount } from 'enzyme';
import React from 'react';
import App from '../components/App.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('works', () => {
  const wrap = mount(<App />);
  console.log('im changing test');
});
