import React from 'react';
import quoteIcon from 'src/assets/images/bg-quotes.png';
import data from 'src/assets/data/peopleData';
import CardPeople from './cardPeople';
import './styles.scss';

const TeamTalk = () => {
  const allData = data.map((elt) => (
    <CardPeople
      key={elt.name}
      description={elt.description}
      img={elt.image}
      name={elt.name}
      specialisation={elt.specialisation}
    />
  ));
  return (
    <div className="team-talk">
      <img src={quoteIcon} alt="quote-icon" className="team-talk__img" />
      <div className="team-talk__all-cards">
        {allData}
      </div>
    </div>
  );
};

export default TeamTalk;
