// import React, { useState, useEffect } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import styles from './App.module.css';
// import { loadContacts, saveContacts } from '../../utils/localStorage';

// const App = () => {
//   const [contacts, setContacts] = useState(() => loadContacts());
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     saveContacts(contacts);
//   }, [contacts]);

//   const addContact = (newContact) => {
//     setContacts((prev) => [...prev, newContact]);
//   };

//   const deleteContact = (id) => {
//     setContacts((prev) => prev.filter((contact) => contact.id !== id));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={styles.container}>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox value={filter} onChange={setFilter} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContact} />
//     </div>
//   );
// };

// export default App;

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;