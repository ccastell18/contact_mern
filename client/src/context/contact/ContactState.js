import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    //used for editing contact.  clicking on edit will enter contact info into state.
    current: null,
    //new piece of state is needed to filter since state is already called
    filtered: null,
    error: null,
  };

  //dispatch allows objects to be dispatched to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  //Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  //set Current Contact
  const setCurrent = (id) => {
    dispatch({ type: SET_CURRENT, payload: id });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
