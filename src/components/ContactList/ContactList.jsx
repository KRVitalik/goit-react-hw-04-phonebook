import React from "react";
import { Contact, List, ButtonDelete, ContactInfo, Number, Name } from "./ContactList.styled";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, contactDelete }) => {

    return (<>
        <List>
            {contacts.map((contact) => {
        let id = contact.id
                return <Contact key={contact.id}> 
                    <ContactInfo>
                        <Name>{contact.name}</Name>
                        <Number> : {contact.number}</Number>
                    </ContactInfo>
                <ButtonDelete onClick={() => contactDelete(id)}>delete</ButtonDelete></Contact>
        }
        )}
        </List></>
     );
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    contactDelete: PropTypes.func,
}
 
export default ContactList;