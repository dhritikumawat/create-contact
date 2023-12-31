import React from "react";

const ContactList = (contacts) => {
  console.log(contacts);

  const renderContactList = contacts.contacts.map((contact) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
