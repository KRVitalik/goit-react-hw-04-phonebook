import { InputForm, Label } from "components/ContactForm/ContactForm.styled";
import React from "react";
import PropTypes from 'prop-types';

const Filter = ({handleInputChange}) => {
    return ( 
        <Label>Find contact by name
            <InputForm
  onChange={handleInputChange}
  type="text"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
        </Label>
     );
}

Filter.propTypes = {
    handleInputChange: PropTypes.func,
}

export default Filter