import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Idcard from "@ant-design/icons/IdcardOutlined";
import ArrowBtn from "@ant-design/icons/RightCircleTwoTone";
import "./contact-card.scss";

const ContactCard = ({ contact }) => {
  const { name, email, id } = contact;

  const [hoveringOverIcon, setHoveringOverIcon] = useState(false);

  const handleOnMouseEnter = (id) => {
    setHoveringOverIcon(id);
  };

  return (
    <div
      className={`contact-card ${
        hoveringOverIcon === id ? "active-hover" : ""
      }`}
    >
      <div className="card-icon center">
        <Idcard />
      </div>
      <div className="card-info__name center">
        <h1 className="card-info__item">{name}</h1>
      </div>
      <div className="card-info__email center">
        <p className="card-info__item">{email}</p>
      </div>
      <div
        className="card-button center"
        onMouseEnter={() => handleOnMouseEnter(id)}
        onMouseLeave={() => setHoveringOverIcon(false)}
      >
        <Link to={name}>
          <ArrowBtn />
        </Link>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
