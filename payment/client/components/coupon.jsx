import React from 'react';

class Coupon extends React.Component {
	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {coupon:false}
	}
  
  handleClick () {
    this.setState({coupon:true})
  }

	render() {
		if (!this.state.coupon) {
			return (
		  <div className="coupon">
		    <button 
		    className="coupon-button"
		    onClick={this.handleClick}
		    >Have a coupon?
		    </button>
		  </div>	
		  )
		} else {
	    return (
	  	<form className="coupon-form">  
		    <input type="text" placeholder="Enter Coupon" className="coupon-input"></input>
		    <button className="coupon-submit">Apply</button>
	    </form> 
	    
	    );
	  }  
	}
}
// var Coupon = function (props) {
//   	if (!props.coupon) {
//   		return (
//   	  <div>
//   	    <button className="coupon-button">Have a coupon?</button>
//   	  </div>	
//   	  )
//   	} else {
// 	    return (
// 	  	<form>  
// 		    <input type="text"></input>
// 		    <button>Coups</button>
// 	    </form> 
	    
// 	    );
//   }  
// }


export default Coupon