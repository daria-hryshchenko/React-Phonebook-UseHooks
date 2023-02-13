import React,  { Component } from "react";
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactFormStyle";



 class ContactForm extends Component {
    state = {
        name: "",
        number: "",
     };

     handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
     }

     handleSubmit = (event) => {
         event.preventDefault();

         const contact = {
             name: this.state.name,
             number: this.state.number,
         };
         this.props.onSubmit(contact);

         this.reset();
     }
     
     reset = () => {
         this.setState({
             name: "",
             number: "",
         });
     }
   

    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <Label htmlFor="number">Number</Label>
            <Input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleInputChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
                <Button type="submit">Add contact</Button>
        </Form>
    )
    }
}


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}


export default ContactForm;