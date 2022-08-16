import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { number } from 'prop-types';
import * as actions from '../redux/actions';
import { connect, useSelector } from 'react-redux';

function Phonebook() {
  const contacts = useSelector(state => state.reducer.contacts);
  const filter = useSelector(state => state.reducer.filter);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} filter={filter} />
      <Filter value={filter} />
    </div>
  );
}
export default Phonebook;
