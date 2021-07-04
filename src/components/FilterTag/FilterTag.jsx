import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@ant-design/icons/CloseCircleOutlined";
import "./filter-tag.scss";

const FilterTag = ({ filterValue, handleCloseFilter }) => {
  return (
    <div className="filter-tag">
      <span>{filterValue}</span>
      <CloseIcon
        onClick={handleCloseFilter}
        className="filter-tag__close-icon"
      />
    </div>
  );
};

FilterTag.propTypes = {
  filterValue: PropTypes.string,
  handleCloseFilter: PropTypes.func,
};

FilterTag.defaultProps = {
  filterValue: undefined,
  handleCloseFilter: undefined,
};

export default FilterTag;
