import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts) ?? [];

    setContacts(parsedContacts)
  }, [])

  useEffect(() => {
if(contacts.length === 0) return

    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const checkName = (e) => {
    return contacts.some(contact =>
      contact.name.toLowerCase() === e.target.value)
  }
    
  const handleInputChange = e => {
    e.target.name === "name"
      ? setName(e.target.value)
      : e.target.name === "number"
        ? setNumber(e.target.value)
        : setFilter(e.target.value)

    checkName(e)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
    
      toast.error(`${name} is already in contact !`, {
        position: toast.POSITION.TOP_CENTER
      });
      ;
      return;
    }
    let contact = {
      id: nanoid(),
      name,
      number,
    }

    setContacts(contacts => ([...contacts, contact]))
    toast.success(`You add contact ${name} to your phonebook.`, {
      position: toast.POSITION.TOP_CENTER
    });
    
    e.target.reset()
  }

  const contactDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))

          toast.warn(`You deleted contact ${name} from your phonebook.`, {
        position: toast.POSITION.TOP_CENTER
      });
}
  
  const filteredContacts = () => {
    return contacts
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name))
      .filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  }


    return (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm handleSubmit={handleSubmit} handleInputChange={handleInputChange } />
    <h2>Contacts</h2>
    <Filter handleInputChange={handleInputChange } />
        <ContactList
          contacts={filteredContacts()}
          contactDelete={contactDelete} />
        <ToastContainer />
</Container>
    );
}
 
export default App;
