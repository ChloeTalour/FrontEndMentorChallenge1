import React from 'react';
import './styles.scss';
import data from 'src/assets/data/valuesData';
import Article from './article';

const Values = () => {
  const allCard = data.map((elt) => (
    <Article
      key={elt.title}
      img={elt.image}
      title={elt.title}
      content={elt.description}
    />
  ));
  return (
    <div className="values">
      {allCard}
    </div>
  );
};

export default Values;
