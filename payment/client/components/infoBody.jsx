import React from 'react';
import Axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCaretSquareRight,faCertificate,faDotCircle,faFileAlt,faMobileAlt,faPlayCircle,faStopwatch,faWifi} from '@fortawesome/fontawesome-free-solid'
import Buy from './buy.jsx';
import Cart from './cart.jsx';
import Coupon from './coupon.jsx';
import {calculateRandomPrice} from '../infoHelpers.js'


class InfoBody extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (!this.props.course) {
      return (<div>Loading...</div>) 
    } else {
      return (
        <div className="info-body-main"> 
          <div className="price">
            <span className="sale-price">{this.props.course.courseToPurchase.price}</span>
            <span className="original-price">{'$' + calculateRandomPrice(this.props.course.courseToPurchase.price)[0]}</span>
            <span className="percent-sale">{calculateRandomPrice(this.props.course.courseToPurchase.price)[1] + '% off'}</span>
          </div>
          <div className="sale-time-left">
            <FontAwesomeIcon icon={faStopwatch} />
            <span>{' '}{(Math.floor(Math.random() * 4 + 1)) + ' days left at this price'}</span>
          </div>
          <div className="purchase-main">
            <Buy />
            <Cart />
            <div className="money-back-gary">30-Day Money-Back Guarantee</div>
          </div>
          <div className="info-details">
            <strong>Includes:</strong>
            <div className="info-vid-time">
              <FontAwesomeIcon className="icons" icon={faCaretSquareRight} />
              <span>{Math.floor((this.props.course.courseToPurchase.num_lectures)/2) + ' hours on-demand video'}</span>
            </div>
             <div className="suplemental-recourses">
              <FontAwesomeIcon className="icons" icon={faFileAlt} />
              <span>{Math.floor(Math.random() * (this.props.course.courseToPurchase.num_quizzes) + 2) + 'Supplemental Resources'}</span>
            </div>
            <div className="info-lifetime">
              <FontAwesomeIcon className="icons" icon={faDotCircle} />
              <span>{'Full lifetime access'}</span>
            </div>
            <div className="info-access">
              <FontAwesomeIcon className="icons" icon={faMobileAlt} />
              <span>{'Access on Mobile and TV'}</span>
            </div>
            <div className="info-certificate">
              <FontAwesomeIcon className="icons" icon={faCertificate} />
              <span>{'Certificate Of Completion'}</span>
            </div>
          </div>
          <div>
            <Coupon />
          </div>
        </div>
      )
    }
  }
}

export default InfoBody



