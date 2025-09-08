import React, { Component } from "react";

import User from "./User";

const Contacts = ({contacts, closeModal, modalState}) => {

    return (
      <div className="container">
        {contacts.map((user) => (
          <User
            key={user.id}
            userDetails={user}
            showModal={modalState}
            modalState={user.show}
            closeModal={closeModal}
          />
        ))}
      </div>
    );
}

export default Contacts;
