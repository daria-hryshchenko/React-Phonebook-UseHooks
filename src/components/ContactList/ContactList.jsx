import PropTypes from "prop-types";
import React from "react";
import { List, ContactItem, Button} from "./ContactListStyle";

function ContactList({ contacts, deleteContact = () => {} }) {
    

    return (
        <List>
            {contacts?.length > 0 && contacts.map((contact, index) => { 
        return (
            <ContactItem key={index}>
                {contact.name} : {contact.number}
                <Button type="button" onClick={() => deleteContact(contact.id)}>Delete</Button>
            </ContactItem>
            
        )
    })}
            </List>
        )
    
}

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,

    deleteContact: PropTypes.func,
}

