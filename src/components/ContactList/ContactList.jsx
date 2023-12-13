import React from 'react';
import css from './ContactList.module.css';

function ContactList({contacts, deleteContact}) {
console.log(contacts)
  return (
    <ul className={css.Contacts}>
      {contacts.map(contact => {
        return (
          <li className={css.ContactList} key={contact.id}>
            <p>
              {contact.name}: {contact.number}
              <button className={css.DeleteBtn} type='button' onClick={() => deleteContact(contact.id)}>delete</button>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
