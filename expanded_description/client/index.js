import React from 'react';
import ReactDOM from 'react-dom';
import Expanded from './components/App.jsx';
import './styles.css';

ReactDOM.render(
  <Expanded/>, document.getElementById('expanded'));

window.Expanded = Expanded;