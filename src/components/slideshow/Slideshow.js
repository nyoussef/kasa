import React, { useState } from 'react'
import './slideshow.scss'

const Slideshow = (props) => {

    const {logement} = props;
    const [index, setIndex] = useState(0);

    const arrowLeftClick = () => {
        setIndex((prevIndex) => prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1);
      };
    
      const arrowRightClick = () => {
        setIndex((prevIndex) => prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1);
      };
  return (
    <div className="logement-pictures">
        {logement.pictures.length > 1 && (
          <>
            <img className="arrow arrow-left" src={require("../../img/arrow_back_ios-24px 1.png")} alt="arrow-left" onClick={arrowLeftClick} />
            <img className="arrow arrow-right" src={require("../../img/arrow_forward_ios-24px 1.png")} alt="arrow-right" onClick={arrowRightClick} />
            <p className="carousel-position">{`${index + 1}/${logement.pictures.length}`}</p>
          </>
        )}
        <img className="picture" src={logement.pictures[index]} alt={logement.title} />
      </div>
  )
}

export default Slideshow