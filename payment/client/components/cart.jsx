import React from 'react';



class Cart extends React.Component {
  constructor(props){
    super(props)	
  }

  render() {
		return (
		  <div className="cart-main"> 
      	<button className="cart-button">Add To Cart</button>	
    	</div>
		)
  }
}


export default Cart