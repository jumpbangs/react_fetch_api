import React, {Component} from "react";

import UserModal from "./UserModal";

class User extends Component {

    render() {
        const user = this.props.userDetails;
        return(
            <div className='pt-3'>
                <div className='card' onClick={this.props.showModal.bind(this, user.id)}>
                    <div className='card-header'>
                        {user.name}
                    </div>
                    <div className='card-body' >
                        <div className='card-title'> Username: {user.username}</div>
                        <div className='card-text'> Email: {user.email}</div>
                    </div>
                </div>
                <UserModal userDetails ={user} showModal ={this.props.showModal} modalState={user.show} closeModal={this.props.closeModal}/>
            </div>

        )
    }

}

export default User;