import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
}

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    this.checkName(e)
  }

  checkName = (e) => {
    const { contacts } = this.state;
    return contacts.some(contact =>
      contact.name.toLowerCase() === e.target.value)
  }


  handleSubmit = e => {
    e.preventDefault()
    let {contacts, name} = this.state
  if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
    
    toast.error(`${this.state.name} is already in contact !`, {
        position: toast.POSITION.TOP_CENTER
      });
;
    return;
  }
    let contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }))

    toast.success(`You add contact ${this.state.name} to your phonebook.`, {
        position: toast.POSITION.TOP_CENTER
    });
    
    e.target.reset()
  }

  contactDelete = (id) => {
    this.setState((prevState) => { 
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
          toast.warn(`You deleted contact ${this.state.name} from your phonebook.`, {
        position: toast.POSITION.TOP_CENTER
      });
  }
  
  filteredContacts = () => {
      const { contacts, filter } = this.state;
    return contacts
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name))
      .filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  }

  render() { 
    return (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm handleSubmit={ this.handleSubmit} handleInputChange={this.handleInputChange } />
    <h2>Contacts</h2>
    <Filter handleInputChange={this.handleInputChange } />
        <ContactList contacts={this.filteredContacts()} contactDelete={this.contactDelete} />
        <ToastContainer />
</Container>
    );
  }
}
 
export default App;
