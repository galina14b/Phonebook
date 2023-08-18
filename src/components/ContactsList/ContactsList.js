import ContactsListItem from "components/ContactsListItem/ContactsListItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { contactsState, filterState, isLoadingState, errorState } from "../../redux/selectors/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations/operations";

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsState);
  const isLoading = useSelector(isLoadingState);
  const error = useSelector(errorState);
  const filter = useSelector(filterState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtration = (filter) => {
    const filteredData = contacts.filter((item) => {
      return item.name.toLowerCase().includes(filter)
    })
    return (filteredData.map(item => {
      return <ContactsListItem item={item} key={item.id} />  
    })
    )
  }

  return (
    <div>
      <h2>Contacts</h2>

      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Smth is wrong</p>}

      { !isLoading && contacts.length > 0 && <ul>
        {!filter && contacts.map(item => {
          return <ContactsListItem item={item} key={item.id} />
        })}
        
      {filter && filtration(filter)}
      </ul>}
      
    </div>
  )
}

export default ContactsList;

