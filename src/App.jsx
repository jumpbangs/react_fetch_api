import React, { useEffect } from "react";

import "./styles/App.css";
import "./styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Contacts from "./components/user/Contacts";

const App = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch('/data/MOCK_DATA.json')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const updated = data.map((user) => ({ ...user, show: false, profileImage: '../images/profile-images.webp' }));
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
    setUsers(users.map(user =>
      user.id === id ? { ...user, show: false } : user
    ));
  };

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
