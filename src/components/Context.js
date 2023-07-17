import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const useContextBlock = () => {
  return useContext(Context);
};

const ContextBlock = ({ children }) => {
  
  const [newContact, setNewContact] = useState('');

  return (
    <Context.Provider value={{
      newContact: newContact, addNewContact: setNewContact,
    }}>
      {children}
    </Context.Provider>
  )
}

export { useContextBlock, ContextBlock };