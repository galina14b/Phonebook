import css from "./ContactsListItem.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice/contactsSlice';

const ContactsListItem = () => {
  const contacts = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  const filtration = (filter) => {
    const filteredData = contacts.filter((item) => {
      return item.name.toLowerCase().includes(filter)
    })
    return (filteredData.map(item => {
      return listItems(item)  
    })
    )
  }

  const listItems = (data) => {
    return (
      <li className={css.li} key={data.id}>{data.name} - {data.number} <button
          aria-label="Decrement value" onClick={() => dispatch(remove(data.id))}>Delete</button>
          </li> 
    )
  }

  return (
    <>
      <ul>
        {!filter && contacts.map(item => {
          return listItems(item)
      })}
      {filter && filtration(filter)}
      </ul>
    </>
  )
}

export default ContactsListItem;
