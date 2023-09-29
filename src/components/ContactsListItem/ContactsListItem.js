import css from "./ContactsListItem.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations/operations";

const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(item.id));

  const listItems = (data) => {
    return (
      <li className={css.li}>
        <div className={css.icon}></div>
        <div className={css.name}>{data.name} - {data.number}</div>
        <button aria-label="Decrement value" onClick={() => dispatch(handleDelete)}>Delete</button>
      </li> 
    )
  }

  return (
    <>
      {listItems(item)}
    </>
  )
}

export default ContactsListItem;
