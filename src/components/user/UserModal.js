import React, { Component } from "react";

/* Modal */
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";

class UserModal extends Component {
  render() {
    let {
      show,
      firstName,
      lastName,
      phone,
      address,
      email,
      profileImage,
    } = this.props.userDetails;
    let state = address["state"];
    let city = address["city"];
    let country = address["country"];
    let streetAddress = address["streetAddress"];

    if (!show) {
      return null;
    }
    return (
      <Modal
        show={show}
        onHide={this.props.closeModal.bind(this, this.props.userDetails.id)}
      >
        <ModalHeader>
          <div className="profileImage">
            <img
              src={profileImage}
              alt="profileImage"
              className="rounded-circle"
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="basicInfo">
            <h3>Basic Info</h3>
            <ul className="userList">
              <li>
                Name : {firstName} {lastName}
              </li>
              <li>Contact : {phone}</li>
              <li>Email : {email}</li>
            </ul>
          </div>

          <div className="addressInfo">
            <h3>Address Info</h3>
            <ul className="userList">
              <li>Address : {streetAddress}</li>
              <li>City : {city}</li>
              <li>State : {state}</li>
              <li>Country : {country}</li>
            </ul>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            onClick={this.props.closeModal.bind(
              this,
              this.props.userDetails.id
            )}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default UserModal;
