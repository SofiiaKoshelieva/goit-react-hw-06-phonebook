import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const reducer = createReducer(
  { contacts: initialState, filter: '' },
  {
    [addContact]: (state, action) => {
      let isNameAlreadyExists = state.contacts.find(
        element => element.name === action.payload.name
      );
      if (isNameAlreadyExists) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      } else {
        return {
          contacts: state.contacts.concat(action.payload),
          filter: state.filter,
        };
      }
    },
    [deleteContact]: (state, action) => {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        filter: state.filter,
      };
    },
    [changeFilter]: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  }
);
