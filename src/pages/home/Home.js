import React from "react";
import "./home.scss";
import logements from "../../data/logements.json";
import LogementCard from "../../components/logementCard/LogementCard";
import Banner from "../../components/banner/Banner";


const Home = () => {
  return (
    <div className="home-container">
      <Banner bannerId="home" />
      <div className="cards-container">
        {logements.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
  };
  
  export default Home;
  
  