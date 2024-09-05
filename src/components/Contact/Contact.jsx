import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

const Contact = ({ contact: { id, number, name } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem}>
      <div>
        <div className={css.contactListItemLine}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={css.contactListItemLine}>
          <MdPhoneInTalk />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
