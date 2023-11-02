import React, { Component } from 'react';
import css from './ContactForm.module.css';
import shortid from 'shortid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    // {this.props.contacts.includes(contact) ? console.log('includes'): console.log('not includes')}
    // if(this.props.contacts.includes(contact)){
    //   return console.log('includes')
    // } else {
    //   return console.log('not includes')
    // }
    this.props.onAddContact(contact); 
    this.setState({
      name: '',
      number: '',
    });

  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { contacts } = this.props;
    return (
      <form
        className={css.ContactsWrapper}
        contacts={contacts}
        onSubmit={this.onFormSubmit}
      >
        <label htmlFor="name" className={css.Label}>
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="tel" className={css.Label}>
          Number
          <input
            id="tel"
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.Btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
