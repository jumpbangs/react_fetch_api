import React, {Component} from "react";

/* Modal */
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class UserModal extends Component {
    render() {
        let {show, id, name, phone, website, address, company} = this.props.userDetails;
        let street = address['street'];
        let city = address['city'];
        let zipcode = address['zipcode'];
        let companyName = company['name'];

        if(!show){
            return null;
        }
        return (
            <Modal show={show}>
                <ModalHeader>
                    <ModalTitle>{name}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ul className='userList'>
                        <li>Contact  : {phone}</li>
                        <li>Address  : {street},{city}</li>
                        <li>Zip Code : {zipcode}</li>
                        <li>Company  : {companyName}</li>
                        <li>Website  : {website}</li>
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