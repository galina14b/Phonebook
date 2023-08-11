import React from "react";

import css from "./App.module.css"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

const App = () => {
  return (
    <div className={css.block}>
      <h2>Phonebook</h2>
      <ContactsForm />
      <Filter/>
      <ContactsList />
    </div>
  )  
};



export { App }
