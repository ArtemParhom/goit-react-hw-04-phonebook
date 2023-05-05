import PropTypes from 'prop-types';
import css from './contactsList.module.css';

export const ContactsList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li className={css.contactsListItem} key={id}>
          {name}: {number}
          <button
            className={css.contactsListButton}
            type="button"
            onClick={() => deleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
