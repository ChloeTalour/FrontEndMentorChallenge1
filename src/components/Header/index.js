import React from 'react';
import Logo from 'src/assets/images/logo.svg';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <a href="#">
        <img className="header__logo--img" src={Logo} alt="Logo" />
      </a>
    </div>

    <nav className="header__nav">
      <ul className="header__nav--ul">
        <li><a href="#">Features</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  </div>
);

export default Header;
