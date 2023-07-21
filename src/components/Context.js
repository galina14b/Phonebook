import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const useContextBlock = () => {
  return useContext(Context);
};

const ContextBlock = ({ children }) => {
  
  const [newContact, setNewContact] = useState(null);
  // const [hasNewContact, setHasNewContact] = useState(false);

  return (
    <Context.Provider value={{
      newContact: newContact, addNewContact: setNewContact,
      // hasNewContact: hasNewContact, addHasNewContact: setHasNewContact,
    }}>
      {children}
    </Context.Provider>
  )
}

export { useContextBlock, ContextBlock };