import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Axios from 'axios';
import Preview from './components/preview.jsx';
import InfoBody from './components/infoBody.jsx';
import {getYoutubeVideos} from './infoHelpers.js';


class Payment extends React.Component { 
	constructor (props) {
	  super(props);
	}

	componentDidMount () {
    //get course data from database set state
    var context = this;
	  Axios.get('/courses')
    .then(function (response){
      context.setState({courses:response.data, courseToPurchase: response.data[70]})  
    })
    .catch(function(err){
      console.error(err) 
    })
    //get preview videos for preview component
    getYoutubeVideos('hackreactor bootcamp',(data)=> {
      this.setState({previewVideo:data[1], courses:this.state.courses, courseToPurchase:this.state.courseToPurchase})  
    })    	
	}

  render () {
    if(!this.state) {
      return (<div>Loading...</div>)  
    } else {
      return (
      	<div className="payment-main">
      	  <Preview 
            thumbnail= {this.state}
          />
      	  <InfoBody 
            course= {this.state}
          />
      	</div>
      );
    }
  }
}

ReactDOM.render(<Payment />, document.getElementById('payment'))
