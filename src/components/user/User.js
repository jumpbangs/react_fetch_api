import React, {Component} from "react";

import UserModal from "./UserModal";

class User extends Component {

    render() {
        const user = this.props.userDetails;
        return(
            <div className='pt-3'>
                <div className='card cardUser' onClick={this.props.showModal.bind(this, user.id)}>
                        <div className='container p-3'>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <img src={user.profileImage} alt="profileImage.jpg" className='rounded-circle img-fluid'/>
                                </div>
                                <div className='col-sm-9'>
                                    <div className='card-body' >
                                        <div className='card-title'> Name : {user.firstName} {user.lastName}</div>
                                        <div className='card-text'> Email: {user.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <UserModal userDetails ={user} showModal ={this.props.showModal} modalState={user.show} closeModal={this.props.closeModal}/>
            </div>

        )
    }

}

export default User;