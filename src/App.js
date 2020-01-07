import React, {Component} from 'react';
import './styles/reset.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contacts from "./components/Contacts";


class App extends Component {

    state = {
        users:[],
    };

    showModal = (id) => {
        // console.log(id);
        this.setState({
            users:this.state.users.map((value) => {
                if(value.id === id){
                    value.show = true;
                }
                return value;
            })
        })
    };

    closeModal = (id) => {
        // console.log(id);
        this.setState({
            users:this.state.users.map((value) => {
                if(value.id === id){
                    value.show = false;
                }
                return value;
            })
        })
    };


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            data.map((value) => {
                value.show = false;
                return value;
            })
          this.setState({users: data})
        })
        .catch(console.log);
  }


  render() {
    return(
        <Contacts contacts = {this.state} modalState = {this.showModal}  closeModal = {this.closeModal} />
    )
  }
}

export default App;
