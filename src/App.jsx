import React, { useEffect } from "react";

import "./styles/App.css";
import "./styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Contacts from "./components/user/Contacts";

const App = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch('/data/userData.json')
      .then(res => res.json())
      .then((data) => {
        const updated = data.map((user) => ({ ...user, show: false }));
        setUsers(updated);
      })
      .catch(console.error);
  }, []);
  
  const showModal = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, show: true } : user
    ));
  };


  const closeModal = (id) => {
    // console.log(id);
    setUsers(users.map(user =>
      user.id === id ? { ...user, show: false } : user
    ));
  };

  // componentDidMount() {
  //   fetch("https://mock-io.herokuapp.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.map((value) => {
  //         value.show = false;
  //         return value;
  //       });
  //       this.setState({ users: data });
  //     })
  //     .catch(console.log);
  // }



  console.log(users);


    return (
      <div>
        <Header />
        <Contacts
          contacts={users}
          modalState={showModal}
          closeModal={closeModal}
        />
      </div>
    );
}

export default App;
