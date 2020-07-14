import React, { Fragment, useContext } from 'react';

import ContactItem from './ContactItem';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  //initialize context first
  const contactContext = useContext(ContactContext);
  //Component now has access to state or actions from Context
  //destructure state
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
