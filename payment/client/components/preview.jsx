import React from 'react';
import Img from 'react-image'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCaretSquareRight} from '@fortawesome/fontawesome-free-solid'

var Preview = function (props) { 
	console.log(props)
	if (!props.thumbnail.courseToPurchase) {
	  return (<div>Loading...</div>)
	} else {
	  return (
	    <div className="preview-window"> 
	      <img src={props.thumbnail.courseToPurchase.image_240x135} className="preview-image"/>
	      <FontAwesomeIcon className="icons" icon={faCaretSquareRight} /> 
	      <span className="preview-intro">Preview This Course</span>
	    </div>
	  )
  }
}


export default Preview

