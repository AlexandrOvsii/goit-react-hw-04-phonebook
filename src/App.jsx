import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import contacts from './contacts.json';

function App() {
  const [contactsList, setContacts] = useState(() => {
    const lsContacts = window.localStorage.getItem('contacts');
    return lsContacts ? JSON.parse(lsContacts) : contacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    contactsList &&
      window.localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  function onAddContact(contact) {
    if (contactsList.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  }
  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const getVisibleContacts = () =>
    contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 className={css.Title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2 className={css.Title}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;

