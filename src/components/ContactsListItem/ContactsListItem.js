import css from "./ContactsListItem.module.css";
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice/contactsSlice';

const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();

  const listItems = (data) => {
    return (
      <li className={css.li}>{data.name} - {data.number} <button
          aria-label="Decrement value" onClick={() => dispatch(remove(data.id))}>Delete</button>
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
