import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';


export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
