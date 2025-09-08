import React, { Component } from "react";

/* Modal */
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";

const UserModal = ({ userDetails, closeModal}) => {
    const {
      show,
      firstName,
      lastName,
      phone,
      address,
      email,
      profileImage,
    } = userDetails;
    
    const state = address["state"];
    const city = address["city"];
    const country = address["country"];
    const streetAddress = address["streetAddress"];

    if (!show) {
      return null;
    }

    return (
      <Modal
        show={show}
        onHide={() => closeModal(userDetails.id)}
      >
        <ModalHeader>
          <div className="profileImage">
            <img
              src={profileImage}
              alt="profileImage"
              className="rounded-circle w-50 mx-auto d-block"
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
            onClick={() => closeModal(userDetails.id)}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    );
}

export default UserModal;
