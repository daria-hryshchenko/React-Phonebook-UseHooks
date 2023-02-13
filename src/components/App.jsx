import React from "react";
import styled from "styled-components";
import storage from "./../helpers/storage";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from 'nanoid';



export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    // if (JSON.parse(localStorage.getItem('contacts'))) {
    //   this.setState({
    //     contacts: JSON.parse(localStorage.getItem('contacts')),
    //   });
    // }

    const savedContacts = storage.load('contacts') ?? this.state.contacts;
    this.setState({"contacts": savedContacts});
  }


  componentDidUpdate(prevProps, prevState) { 
    const { contacts } = this.state;
    if (prevState.contacts!== contacts) {
      storage.save('contacts', contacts);
    }

    // if (prevState.contacts !== this.state.contacts) {
    //   const strinfFildContacts = JSON.stringify(this.state.contacts);
    //   localStorage.setItem("contacts", strinfFildContacts);
    // }
  }


  addContact = contact => {
    if (this.state.contacts.some(p => p.name === contact.name)) {
      alert(`Contact is already exists!`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    }

    this.setState({
      contacts: [...this.state.contacts, finalContact]
    })
  }

  handleFilterChange = ({target : {value}}) => {
    this.setState({
     filter: value
   })
  }


  deleteContact  = contactId  => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  
  render() {
    const filteredContacts = this.state.contacts.filter(contact => contact.name
      .toLowerCase()
      .trim()
      .includes(this.state.filter.toLowerCase()))
  


    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={this.state.filter} onFilterChange={this.handleFilterChange } />
        <ContactList contacts={ filteredContacts } deleteContact={this.deleteContact}/>
      </Container>
    )
  }
}

const Container = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const Title = styled.h1`
    font-size: 30px;
    color: #1d81af;
`

const SubTitle = styled.h2`
    font-size: 25px;
    color: #1d81af;
`

