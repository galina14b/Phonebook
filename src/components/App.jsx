import React from "react";
import { useEffect } from "react";

import css from "./App.module.css"
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { useContextBlock } from './Context';

const App = () => {

  const context = useContextBlock();
  
  const { contacts, addContact, newContactName, newContactNumber, filter } = context;
  

  useEffect(() => {
    addContact(prevState => {
            return ([...prevState, { id: nanoid(), name: newContactName, number: newContactNumber }])
          })
    
  }, [newContactName, newContactNumber])

  useEffect(() => {
    filtration(filter.toLowerCase())
  }, [filter]);

  const filtration = (filter) => {
    const filteredData = contacts.filter((el) => {
      if (filter === '') {
        return el;
      }
      else {
        return el.name.toLowerCase().includes(filter)
      }
    });
    addContact(filteredData);
  }
  
  
    return (
      <div className={css.block}>
        <h2>Phonebook</h2>
        <ContactsForm />
        <ContactsList/>
        
        <Filter />
      </div>
    )

};

export { App }
