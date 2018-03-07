import React from 'react';
import ReactDOM from 'react-dom';
import Description from './components/App.jsx';
import '../client/styles/styles.css';

ReactDOM.render(
  <Description/>, document.getElementById('description'));

window.Description = Description;
