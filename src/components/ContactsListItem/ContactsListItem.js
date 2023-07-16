import { nanoid } from "nanoid";
import css from "./ContactsListItem.module.css"
import { useContextBlock } from './../Context';


const ContactsListItem = () => {
  
  const context = useContextBlock();

  const deleteContact = (id) => {
    context.addContact(prevState => (
      prevState.filter(contact => contact.id !== id)
    ))
  }


  return (
    <ul>{context.contacts.map( contact => (
      <li className={css.li} key={nanoid()}>{contact.name} - { contact.number} <button onClick={() => deleteContact(contact.id)}>Delete</button></li>)
    )}
    </ul>
  )
}

export default ContactsListItem;
