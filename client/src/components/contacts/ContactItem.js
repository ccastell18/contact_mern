import React, { useContext } from 'react';
import PropTypes from 'prop-types';

//context is called anytime an action is being used
import ContactContext from '../../context/contact/contactContext';

//pass in contact prop from Contacts Component
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  //pull in actions from state
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  //destructuring parts of the contact prop
  const { _id, name, email, phone, type } = contact;

  //calls deleteContact method from context and deletes using id
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
