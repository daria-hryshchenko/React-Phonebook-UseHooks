import { useState, useEffect } from 'react';
import styled from 'styled-components';
import storage from './../helpers/storage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => storage.load('contacts') ?? CONTACTS
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const addContact = contact => {
    if (contacts.some(p => p.name === contact.name)) {
      alert(`Contact is already exists!`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts(prevState => [...prevState, finalContact]);
  };

  const handleFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}

const Container = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #1d81af;
`;

const SubTitle = styled.h2`
  font-size: 25px;
  color: #1d81af;
`;
