import { Component } from "react";
import style from './App.module.css'
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";
import { v4 as uuidv4 } from 'uuid';
import Filtr from "../Filter/Filter";


export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
    // this.setState(({ contacts }) => ({
    //     contacts: [...contacts, contact],
    //   }));
  };

  deleteContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    // const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {

    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <AddContact handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filtr value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={this.visibleContacts()} delet={this.deleteContact}/>
      </div>
    );
  }
}
