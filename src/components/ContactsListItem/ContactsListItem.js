import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import css from "./ContactsListItem.module.css"

const ContactsListItem = ({ contacts, onDelete }) => {
  return (
    <ul>{contacts.map( contact => (
      <li className={css.li} key={nanoid()}>{contact.name} - { contact.number} <button onClick={() => onDelete(contact.id)}>Delete</button></li>)
    )}
    </ul>
  )
}

export default ContactsListItem;

ContactsListItem.prototypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}