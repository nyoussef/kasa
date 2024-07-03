import React from 'react'
import './rating.scss'

const Rating = (props) => {
    const {rating} = props;

    const renderStars = (rating) => {
        const totalStars = 5;
        const stars = [];
    
        for (let i = 1; i <= totalStars; i++) {
          if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star filled filled-star"></i>);
          } else {
            stars.push(<i key={i} className="fas fa-star filled empty-star"></i>);
          }
        }
        return stars;
      };
  return (
        <div className="rating">{renderStars(rating)}</div>
  )
}

export default Rating