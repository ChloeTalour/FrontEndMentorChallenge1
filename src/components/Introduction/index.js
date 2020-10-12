import React from 'react';
import introImg from '../../../images/illustration-intro.png';
import './styles.scss';

const Introduction = () => (
  <div className="introduction">
    <img src={introImg} alt="introImg" className="introduction__img" />
    <div className="introduction__content">
      <h1 className="introduction__content--title">All your files in one secure location, accessible anywhere.</h1>
      <p className="introduction__content--text">Fylo stores all your most important files in one secure location. Access them wherever
        you need, share and collaborate with friends family, and co-workers.
      </p>
      <button type="button" className="introduction__content--button"> Get Started </button>
    </div>
  </div>
);

export default Introduction;
