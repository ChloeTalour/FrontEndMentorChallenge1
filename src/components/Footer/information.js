import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Information = ({ icon, text }) => (
  <div className="informations">
    <p className="informations__description">
      <FontAwesomeIcon icon={icon} className="informations__description--icon"/>
      {text}
    </p>
  </div>
);

export default Information;
