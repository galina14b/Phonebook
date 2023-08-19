import React from "react";

import css from "./App.module.css"
import { ContactsForm } from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoadingState, errorState } from "../redux/selectors/selectors";
import { fetchContacts } from "redux/operations/operations";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingState);
  const error = useSelector(errorState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.block}>
      <h2>Phonebook</h2>
      <ContactsForm />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Smth is wrong</p>}
      <ContactsList />
    </div>
  )  
};



export { App }
