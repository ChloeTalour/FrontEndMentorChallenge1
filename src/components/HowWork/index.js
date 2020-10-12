import React from 'react';
import bigImage from 'src/assets/images/illustration-stay-productive.png';
import iconCross from 'src/assets/images/icon-arrow.svg';
import './styles.scss';

const HowWork = () => (
  <article className="howWork">
    <img src={bigImage} alt="how-fylo-work" className="howWork__img" />
    <section className="howWork__content">
      <h2 className="howWork__content--title">Stay productive, wherever you are</h2>
      <p className="howWork__content--text">
        Never let location be an issue when accessing your files. Fylo has you covered
        or all of your file storage needs.
      </p>
      <p className="howWork__content--text">
        Securely share files and folders with friends, family and
        colleagues for live collaboration. No email attachments required.
      </p>
      <a className="howWork__content--link" href="#">See how Fylo works <img className="howWork__content--icon" src={iconCross} alt="icon-cross" /></a>
    </section>
  </article>
);

export default HowWork;
