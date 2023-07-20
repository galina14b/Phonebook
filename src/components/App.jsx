import React from "react";
import { useState, useEffect } from "react";

import css from "./App.module.css"
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { useContextBlock } from "./Context";

const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('savedContacts')) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');

  const context = useContextBlock();

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  },[contacts]);

  useEffect(() => {
    
    setContacts(prevState => (
      ([...prevState, { id: nanoid(), name: context.newContact.name, number: context.newContact.number }]))
    )
  }, [context.newContact]);

  const filtration = (filter) => {
    const filteredData = contacts.filter((el) => {
      if (filter === '') {
        return el;
      }
      else {
        return el.name.toLowerCase().includes(filter)
      }
    })
    return (
      <ContactsList contacts={filteredData} onDelete={ deleteContact} />
    )
  }

  

  const handleFilter = (onChange) => {
    setFilter(onChange);
  }

  const deleteContact = (id) => {
    setContacts(prevState => (
      prevState.filter(contact => contact.id !== id)
    ))
  }
  
    return (
      <div className={css.block}>
        <h2>Phonebook</h2>
          <ContactsForm contacts={contacts} />
       
        { filtration(filter.toLowerCase())}


        <Filter onChange={handleFilter} />
      </div>
    )
  
};

export { App }
