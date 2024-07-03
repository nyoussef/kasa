import React from "react";
import { Link } from "react-router-dom";
import './logementCard.scss'

const LogementCard = ({logement}) => {
  return (
    <div className="card">
      <Link to={`/logement/${logement.id}`}>
      <div className="card-hover" />
        <img src={logement.pictures[0]} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    </div>
  );
};

export default LogementCard;
