import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext.js';
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
        email: 'Bob@email.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Tom Johnson',
        email: 'Tom@email.com',
        phone: '222-222-2222',
        type: 'professional',
      },
    ],
  };
  //pull out state and dispatch from reducer with useReducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact

  //delete contact

  //set current contact

  //clear current contact

  //upate contact

  //filter contacts

  //clear filter

  //return provider to wrap the entire app with  context
  //any state or actions that want to be accessed will be in value
  return (
    <ContactContext.Provider>
      value ={' '}
      {{
        contacts: state.contacts,
      }}
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
