import React from "react";
import PropTypes from "prop-types";

const ContactFormRow = ({ labelText, inputName, defaultInputValue }) => {
  return (
    <div className="form-item">
      <label>{labelText}:</label>
      <input name={inputName} type="text" defaultValue={defaultInputValue} />
    </div>
  );
};

ContactFormRow.propTypes = {
  labelText: PropTypes.string,
  inputName: PropTypes.string,
  defaultInputValue: PropTypes.string,
};

ContactFormRow.defaultProps = {
  labelText: undefined,
  inputName: undefined,
  defaultInputValue: undefined,
};

export default ContactFormRow;
