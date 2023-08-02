import React from "react";
import { Button, FormContainer, InputForm, Label } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const ContactForm = ({handleInputChange, handleSubmit}) => {
    return ( 
              <div>
              <FormContainer onSubmit={handleSubmit}>
        <Label>Name
            <InputForm
  type="text"
  placeholder="Name"
              name="name"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleInputChange}
          />
          </Label>
          <Label>Number
            <InputForm
  type="tel"
  name="number"
  placeholder="123-45-67"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleInputChange}
/>
          </Label>
        <Button type="submit">Add contact</Button>
        </FormContainer>
</div>
     );
}

ContactForm.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}
 
export default ContactForm;