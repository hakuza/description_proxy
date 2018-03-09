import React from 'react';
import jest from 'jest';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfoBody '../components/infoBody.jsx'
import 

const sampleData = 

{ "_id" : ObjectId("5a98abf3d57394527bf6852e"),
  "id" : 450390, 
  "title" : "Serious About Weight Loss: The Raw Revenge Mind/Body Program",
  "price" : "$44.99",
  "headline" : "A Complete Raw Program for Changing your Body & Mind for Forever Results",
  "num_subscribers" : 27,
  "num_quizzes" : 2,
  "num_lectures" : 31,
  "__v" : 0 }

configure({ adapter: new Adapter() });


describe('Description Component Tests', () => {
  const wrapShallow = shallow(<Description listing={sampleData} />);

  it('should exist', () => {
    expect(wrapShallow.exists()).toEqual(true);
  });