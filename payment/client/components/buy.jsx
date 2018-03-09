import React from 'react';
import Modal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock,faUser} from '@fortawesome/fontawesome-free-solid'


class Buy extends React.Component {
  constructor(props){
    super(props)

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#505763';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
		return (
		  <div className="buy-main"> 
		    <button 
		    className="buy-now-button"
		    onClick={this.openModal}
		    >Buy Now</button>	

		  <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="buy-modal"
          overlayClassName="overlay"
          contentLabel="Example Modal"
        >
         <div className="forms">
            <div className="modal-header">
		          <button className="close-modal" onClick={this.closeModal}>x</button>
		          <h2 ref={subtitle => this.subtitle = subtitle}>Sign up and start Learning!</h2>
		        </div>
	          <form className="modal-form"> 
					    <input type="text" placeholder="Full Name" className="info-input name"></input>
				    </form> 
				    <form className="modal-form">  
					    <input type="text" placeholder="E-mail" className="info-input mail"></input>
				    </form> 
				    <form className="modal-form">  
					    <input type="text" placeholder="Password" className="info-input pass"></input>
				    </form> 
	          <div className="listserve">
	          <input type="checkbox" className="modal-checkbox"></input>
	          <span>You're in for exciting deals and personalized recommendations</span>
	          </div>
	           <button className="modal-submit" onClick={this.closeModal}>Sign Up</button>
	           <div className="privacy">By signing up, you agree to our Terms of Use and Privacy Policy.</div>
	           <div className="modal-footer">Already have an account? Log In</div>
          </div>
        </Modal>
      </div>
		)

  }


}



export default Buy