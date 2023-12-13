import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import contacts from './contacts.json';

function App() {
  const [contactsList, setContacts] = useState(contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('App componentDidMount');
    const lsContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(lsContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    console.log('App componentDidUpdate');
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  function onAddContact(contact) {
    console.log(contact);
    if (contactsList.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  }
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // const getVisibleContacts = () => {
  //   return contactsList.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  //   getVisibleContacts = () => {
  //     const { contacts, filter } = this.state;
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 className={css.Title}>Phonebook</h1>
      <ContactForm contacts={contactsList} onAddContact={onAddContact} />
      <h2 className={css.Title}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList
        // visibleContact={getVisibleContacts}
        contacts={contactsList}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;

// class App1 extends Component {
//   state = {
//     contacts: contacts,
//     filter: '',
//   };

//   onAddContact = contact => {
//     if (this.state.contacts.find(item => item.name === contact.name)) {
//       alert(`${contact.name} is already in contacts`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     console.log('App componentDidMount');
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     console.log(parsedContacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     //prevState - это то, что записано в стейт до обновления. prevProps - это то, что изменилось при введении или удалении
//     console.log('App componentDidUpdate');

//     if (prevState.contacts !== this.state.contacts) {
//       console.log('Обновилось');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <h1 className={css.Title}>Phonebook</h1>
//         <ContactForm contacts={contacts} onAddContact={this.onAddContact} />
//         <h2 className={css.Title}>Contacts</h2>
//         <Filter filter={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
