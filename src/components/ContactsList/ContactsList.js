import ContactsListItem from "components/ContactsListItem/ContactsListItem";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsListItem contacts={contacts} onDelete={onDelete} />
    </div>
  )
}

export default ContactsList;

