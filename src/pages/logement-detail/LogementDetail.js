import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import "./logement-detail.scss";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import Tags from "../../components/tags/Tags";
import Slideshow from "../../components/slideshow/Slideshow";

const LogementDetail = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const lgt = logements.find((logement) => logement.id === id);
    if (!lgt) {
      navigate("/error-404");
    } else {
      setLogement(lgt);
      setLoading(false);
    }
  }, [logement, id, navigate]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="logement-detail">
      <Slideshow logement={logement} />
      <div className="logement-host-info">
        <div className="title-location-tags">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <Tags tags ={logement.tags} />
        </div>
        <div className="host-and-rating">
          <div className="host-detail">
            <div className="host-detail-name">
              <p>{logement.host.name.split(" ")[0]}</p>
              <p>{logement.host.name.split(" ")[1]}</p>
            </div>
            <img className="host-detail-picture" src={logement.host.picture} alt={logement.hostName} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="collapse-container">
        <div className="collapse-container-element">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="collapse-container-element">
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementDetail;
