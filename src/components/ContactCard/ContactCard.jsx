import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Idcard from "@ant-design/icons/IdcardOutlined";
import ArrowBtn from "@ant-design/icons/RightCircleTwoTone";
import "./contact-card.scss";

const ContactCard = ({ contact }) => {
  const { name, email } = contact;

  return (
    <Link to={name}>
      <div className="contact-card">
        <div className="card-icon center">
          <Idcard />
        </div>
        <div className="card-info__name center">
          <h2 className="card-info__item">{name}</h2>
        </div>
        <div className="card-info__email center">
          <p className="card-info__item">{email}</p>
        </div>
        <div className="card-button center">
          <ArrowBtn />
        </div>
      </div>
    </Link>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
