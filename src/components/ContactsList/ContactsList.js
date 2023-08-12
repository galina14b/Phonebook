import ContactsListItem from "components/ContactsListItem/ContactsListItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {contactsState, filterState} from "../../redux/selectors/selectors";

const ContactsList = () => {

  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);

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
      <ul>
        {!filter && contacts.map(item => {
          return <ContactsListItem item={item} key={item.id} />
      })}
      {filter && filtration(filter)}
      </ul>
    </div>
  )
}

export default ContactsList;

