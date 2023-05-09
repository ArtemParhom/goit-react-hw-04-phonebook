import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/filter';
import ContactForm from './contactForm/ContactForm';
import css from './App.module.css';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const CONTACTS = 'contacts';

export default function App() {
  const [contactsInd, setContactsInd] = useState(
    () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? contacts
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (
      contactsInd.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} or ${number} is already in contacts.`);
    }
    const newContact = { name, number, id: nanoid(4) };
    setContactsInd(prevContactsInd => {
      return [...prevContactsInd, newContact];
    });
  };

  const deleteContact = id => {
    const newContacts = contactsInd.filter(contact => contact.id !== id);
    setContactsInd(newContacts);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContact = () => {
    const valueInputFilter = filter.toLowerCase();
    return contactsInd.filter(contact =>
      contact.name.toLowerCase().includes(valueInputFilter)
    );
  };

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contactsInd));
  }, [contactsInd]);

  return (
    <div className={css.container}>
      <ContactForm onSubmit={addContact} />
      {contactsInd.length === 0 ? (
        <h2 className={css.contactsTitle}>No contacts</h2>
      ) : (
        <div>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter onChange={changeFilter} value={filter} />
          <ContactsList
            contactList={filterContact()}
            deleteContact={deleteContact}
          />
        </div>
      )}
    </div>
  );
}
