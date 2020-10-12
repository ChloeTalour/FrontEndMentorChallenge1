import React from 'react';
import './styles.scss';

const GetAccess = () => (
  <div className="get-access">
    <h3 className="get-access__title">Get early access today</h3>
    <p className="get-access__content">
      It only takes a minute to sign up and our free starter tier is extremely generous.
      If you have any questions, our support team would be happy to help you.
    </p>
    <form action="" className="get-access__form">
      <input type="email" name="" id="" placeholder="email@example.com" className="get-access__form--email" />
      <input type="submit" value="Get Started For Free" className="get-access__form--submit" />
    </form>
  </div>
);

export default GetAccess;
