import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';


export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  console.log (contacts);


  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const check = contacts.find(contact => contact.name === name);
    if (check) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(add({ name, number, id: nanoid() }));
    }
	//  dispatch(add({ name, number, id: nanoid() }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.FeedbackForm}>
      <label htmlFor={name}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.InputForm}
        //   className={css.NameForm}
      />

      <label htmlFor={number}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.InputForm}
      />
      <button type="submit" className={css.ButtonSubmit}>
        Add contact
      </button>
    </form>
  );
}
