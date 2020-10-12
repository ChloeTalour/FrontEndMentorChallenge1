import React from 'react';
import PropTypes from 'prop-types';

const CardPeople = ({
  description,
  img,
  name,
  specialisation,
}) => (
  <div className="card-people">
    <p className="card-people__text">
      {description}
    </p>
    <div className="card-people__presentation">
      <img className="card-people__presentation--img" src={img} alt="people-avatar" />
      <div className="card-people__presentation--people">
        <p>{name}</p>
        <p>{specialisation}</p>
      </div>

    </div>

  </div>
);

CardPeople.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialisation: PropTypes.string.isRequired,
};

export default CardPeople;
