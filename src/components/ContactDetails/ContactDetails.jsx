import React from "react";
import PropTypes from "prop-types";
import ContactFormRow from "./components/ContactFormRow";
import "./contact-details.scss";

const ContactDetails = ({ contact }) => {
  const { name, email, username, address } = contact;
  const { city, street, suite, zipcode } = address;

  return (
    <div className="contact-details__container">
      <div className="flex">
        <h1>{name}</h1>
        <a className="button" href="/">
          Back
        </a>
      </div>
      <form>
        <ContactFormRow
          labelText="Full Name"
          inputName="name"
          defaultInputValue={name}
        />
        <ContactFormRow
          labelText="Email"
          inputName="email"
          defaultInputValue={email}
        />
        <ContactFormRow
          labelText="Username"
          inputName="username"
          defaultInputValue={username}
        />
        <ContactFormRow
          labelText="Address"
          inputName="address"
          defaultInputValue={`${street}, ${suite}, ${city}, ${zipcode}`}
        />
      </form>
    </div>
  );
};

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactDetails;
