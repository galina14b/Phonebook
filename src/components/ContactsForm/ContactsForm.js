import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactsForm.module.css";
import { useContextBlock } from "components/Context";


const ContactsForm = () => {

  const context = useContextBlock();
  const { addNewContact } = context;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameInputId = nanoid();
  let numberInputId = nanoid();

  function handleChanges(event) {
    if (event.currentTarget.name === 'name') {
      return setName(event.currentTarget.value)
    }

    if (event.currentTarget.name === 'number') {
      return setNumber(event.currentTarget.value)
    }    
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewContact({ name: name, number: number })
    // this.props.onSubmit({ name: name, number: number })


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
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
  </div>
  
}

export default ContactsForm


