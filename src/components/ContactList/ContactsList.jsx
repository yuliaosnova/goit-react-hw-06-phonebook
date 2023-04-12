import React from 'react';
import css from './ContactList.module.css';
import { remove } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
  const filteredContacts = getFilteredContacts();
  //   console.log ('filtereD', filteredContacts);

  return (
	<>
	<h2>Contacts</h2>
	<ul className={css.list}>
      {filteredContacts.map(item => (
        <li key={item.id} className={css.item}>
          <span className="name">{item.name}: </span>
          <span className="number">{item.number}</span>
          <button className={css.btn} onClick={() => dispatch(remove(item.id))}>
            {'\u00D7'}
          </button>
        </li>
      ))}
    </ul>
	</>
    
  );
};

export default ContactList;
