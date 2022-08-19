import { useState } from 'react';
import s from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { nanoid } from 'nanoid';
export default function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  function onNameChange(e) {
    setName(e.currentTarget.value);
  }
  function onNumberChange(e) {
    setNumber(e.currentTarget.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let isNameAlreadyExists = contacts.find(element => element.name === name);
    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    newContact(name, number);
    e.target.reset();
  }
  const newContact = (name, number) =>
    dispatch(addContact({ id: nanoid(), name, number }));

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className={s.fieldset}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onNameChange}
          />
        </label>
        <label>
          Phone
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onNumberChange}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </fieldset>
    </form>
  );
}
