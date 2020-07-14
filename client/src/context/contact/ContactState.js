import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@email.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Bob Johnson',
        email: 'bob@email.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Jim Johnson',
        email: 'jim@email.com',
        phone: '222-222-2222',
        type: 'professional',
      },
    ],
  };

  //dispatch allows objects to be dispatched to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //set Current Contact

  //Clear Current Contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
