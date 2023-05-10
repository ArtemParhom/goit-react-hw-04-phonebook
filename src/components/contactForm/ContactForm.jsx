import { useState } from 'react';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    e.currentTarget.name === 'name' && setName(e.currentTarget.value);
    e.currentTarget.name === 'number' && setNumber(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1 className={css.formTitle}>Phonebook</h1>
      <form className={css.formBox} onSubmit={onSubmitForm}>
        <label>
          <h3 className={css.titleName}>Name</h3>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <h3 className={css.titleName}>Number</h3>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
