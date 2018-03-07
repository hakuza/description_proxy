import React from 'react';
import axios from 'axios';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/fontawesome-free-solid';
import faker from 'faker';

export default class Expanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  componentDidMount() {
    axios
      .get('/load')
      .then(response => this.setState({description: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="block" id="container">
        <div className="what_you_get block">
          <h3>What will I Learn?</h3>
          <div className="box" id="columnHolder">
            <div id="column1" className="box">
              <ul className="what_you_get_items ulist">
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
              </ul>
            </div>
            <div className="box" id="coloumn2">
              <ul className="what_you_get_items">
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/>
                  </span>{faker
                    .lorem
                    .sentence()}
                </li>
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/></span>{faker
                    .lorem
                    .sentence()}
                </li>
                <li className="list">
                  <span className="span_row"><FontAwesomeIcon icon={faCheck}/>
                  </span>{faker
                    .lorem
                    .sentence()}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3>Requirements</h3>
        <ul className="ulist">
          <li className="list">Basic computer skills</li>
          <li className="list">Ability to install software on your computer</li>
          <li className="list">Admin rights might be required for software installation</li>
        </ul>
        <h3>Description</h3>
        {ReactHtmlParser(this.state.description)}
      </div>
    );
  }
}