import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@ant-design/icons/SearchOutlined";
import ContactCard from "../ContactCard/ContactCard";
import FilterTag from "../FilterTag/FilterTag";
import Select from "../Select/Select";
import { selectSortOptions } from "../../utils/constants/selectSortOptions";
import "./contacts.scss";

const Contacts = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("placeholder");

  const handleSearchedData = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const handleCloseFilter = () => {
    setFilterValue("placeholder");
  };

  return (
    <div className="contacts__container">
      <div className="flex">
        <h1>Contacts</h1>
        <div className="filters__container">
          <div className="select-filter__container">
            <Select
              selectName="filterType"
              selectValue={filterValue}
              onChange={handleFilter}
              options={selectSortOptions}
            />
          </div>
          <input
            className="filter__input"
            type="text"
            placeholder="Search..."
            onChange={handleSearchedData}
          />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      {filterValue !== "placeholder" ? (
        <div className="filter-tag__container">
          <FilterTag
            filterValue={filterValue}
            handleCloseFilter={handleCloseFilter}
          />
        </div>
      ) : null}
      {data
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            value.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return value;
          }
          return null;
        })
        .sort((a, b) => {
          if (filterValue === "name") {
            return a.name.localeCompare(b.name);
          } else if (filterValue === "email") {
            return a.email.localeCompare(b.email);
          }
          return null;
        })
        .map((contact) => {
          const { id } = contact;
          return <ContactCard key={id} contact={contact} />;
        })}
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contacts;
