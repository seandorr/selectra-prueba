import React from "react";
import PropTypes from "prop-types";

const Select = ({ selectName, selectValue, onChange, options }) => {
  return (
    <select name={selectName} value={selectValue} onChange={onChange}>
      {options.map((option) => {
        const { value, label, disabled, hidden } = option;
        return (
          <option value={value} key={value} disabled={disabled} hidden={hidden}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  selectName: PropTypes.string,
  selectValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Select.defaultProps = {
  selectName: undefined,
  selectValue: undefined,
};

export default Select;
