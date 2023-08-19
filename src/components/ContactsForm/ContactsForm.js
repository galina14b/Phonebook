import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactsForm.module.css";

import React from 'react'
import { useDispatch } from 'react-redux'
import { contactsState } from '../../redux/selectors/selectors';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addNewContact } from "redux/operations/operations";

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameInputId = nanoid();
  let numberInputId = nanoid();

  const contacts = useSelector(contactsState);
  const dispatch = useDispatch();

  function handleChanges(event) {
    if (event.currentTarget.name === 'name') {
      return setName(event.target.value)
    }

    if (event.currentTarget.name === 'number') {
      return setNumber(event.target.value)
    }
  }


  function handleSubmit(event) {
    event.preventDefault();
    let hasContact
    contacts.find(item => {
      if (item.name === name && item.number === number) {
        alert("Такий контакт вже є");
        return hasContact = true;
      } else {
        return hasContact = false
      }
    })
    
    if (!hasContact) {
      dispatch(addNewContact({ id: nameInputId, name: name, number: number }));
    }

    reset();
  }

  function reset() {
    setName('')
    setNumber('')
  }


  return <div className={css.block}>
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
           Name
           <input
            type="text"
            id={nameInputId}
            value={name}
            name="name"
            onChange={handleChanges}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            id={numberInputId}
            value={number}
            name="number"
            onChange={handleChanges}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
  </div>
}

export default ContactsForm


