import s from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();
  const delContact = id => dispatch(deleteContact(id));
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {filtered.map(contact => {
        return (
          <li className={s.li} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={s.button}
              type="button"
              onClick={() => {
                delContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
