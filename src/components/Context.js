import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const useContextBlock = () => {
  return useContext(Context);
};

const ContextBlock = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [newContactName, setNewContactName] = useState('');

  const [newContactNumber, setNewContactNumber] = useState('');

  const [filter, setFilter] = useState('');

  return (
    <Context.Provider value={{
      contacts: contacts, addContact: setContacts,
      newContactName: newContactName, addNewContactName: setNewContactName,
      newContactNumber: newContactNumber, addNewContactNumber: setNewContactNumber,
      filter: filter, addFilter: setFilter,
    }}>
      {children}
    </Context.Provider>
  )
}

export { useContextBlock, ContextBlock };