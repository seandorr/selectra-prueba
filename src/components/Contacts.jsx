import React from "react";
import PropTypes from "prop-types";
import ContactCard from "./ContactCard/ContactCard";

const Contacts = ({ data }) => {
  return data.map((contact) => {
    const { id } = contact;
    return <ContactCard key={id} contact={contact} />;
  });
};

Contacts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contacts;
