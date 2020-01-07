import React, {Component} from "react";

/* Modal */
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class UserModal extends Component {
    render() {
        let {show, id, firstName, lastName, phone, address, email, profileImage} = this.props.userDetails;
        let state = address['state'];
        let city = address['city'];
        let country = address['country'];
        let streetAddress = address['streetAddress'];

        console.log(this.props.userDetails)
        if(!show){
            return null;
        }
        return (
            <Modal show={show}>
                <ModalHeader>
                    <ModalTitle>{firstName}{lastName}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ul className='userList'>
                        <div>
                            <img src={profileImage} alt="profileImage" className='rounded-circle'/>
                        </div>
                        <li>Contact  : {phone}</li>
                        <li>Address  : {streetAddress}</li>
                        <li>City     : {city}</li>
                        <li>State    : {state}</li>
                        <li>Country  : {country}</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <button onClick = {this.props.closeModal.bind(this, this.props.userDetails.id)} >Close</button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default UserModal;