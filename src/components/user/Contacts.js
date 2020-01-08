import React, {Component} from "react";
import User from "./User";

class Contacts extends Component{
    render() {
        return(
            <div className='container'>
                {
                    this.props.contacts.users.map((user) =>(
                        <User key={user.id} userDetails={user} showModal={this.props.modalState} modalState = {user.show} closeModal={this.props.closeModal}/>
                        ))
                }
            </div>
        )
    }
}

export default Contacts;