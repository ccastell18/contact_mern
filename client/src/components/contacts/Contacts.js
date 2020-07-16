import React, { Fragment, useContext } from 'react';

import ContactItem from './ContactItem';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  //initialize context first
  const contactContext = useContext(ContactContext);
  //Component now has access to state or actions from Context
  //destructure state
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
