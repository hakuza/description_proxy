import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/fontawesome-free-solid";
import Modal from "react-modal";
import { ModalDiv } from "./flag_components/modalDiv.jsx";

export class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yesClicked: false,
      noClicked: false,
      modalIsOpen: false,
      hovered: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.stylesYes = this.stylesYes.bind(this);
    this.stylesNo = this.stylesNo.bind(this);
  }

  handleClick(e) {
    console.log("clicked");
    console.log(this.state.yesClicked);
    if (e === "yes") {
      this.setState({
        yesClicked: !this.state.yesClicked,
        noClicked: false,
      });
    }
    if (e === "no") {
      this.setState({
        noClicked: !this.state.noClicked,
        yesClicked: false,
      });
    }
  }

  handleMouseOver() {
    console.log("Mouse is over");
    this.setState({
      hovered: true,
    });
  }

  handleMouseOut() {
    console.log("Mouse is out");
  }

  stylesYes() {
    if (this.state.yesClicked) {
      var style = {
        color: "#46c28e",
        border: "1px solid #46c28e",
      };
      return style;
    }
  }

  stylesNo() {
    if (this.state.noClicked) {
      var style = {
        color: "#ec5252",
        border: "1px solid #ec5252",
      };
      return style;
    }
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    const style = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
      overlay: {
        backgroundColor: "rgba(41,48,59,0.8)",
      },
    };
    return (
      <div className="flag_container">
        <div className="question">Was this review helpful?</div>
        <div
          className="yes"
          onClick={() => this.handleClick("yes")}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          style={this.stylesYes()}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div
          className="no"
          onClick={() => this.handleClick("no")}
          style={this.stylesNo()}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div className="report" onClick={this.openModal}>
          Report
        </div>
        <Modal
          ariaHideApp={false} //Hides appElement
          shouldCloseOnOverlayClick={true} // fix
          shouldCloseOnEsc={true} // fix
          isOpen={this.state.modalIsOpen}
          style={style}
        >
          <div>
            <ModalDiv close={this.closeModal} />
          </div>
        </Modal>
        {this.state.yesClicked || this.state.noClicked ? (
          <div className="message">
            Thank you! You have successfully submitted feedback for this review.
          </div>
        ) : null}
      </div>
    );
  }
}
