import React from 'react';
import Logo from 'src/assets/images/logo.svg';
import {
  faMapMarkerAlt, faPhoneAlt, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import Informations from './information';

const Footer = () => (
  <footer className="footer">
    <img className="footer__logo" src={Logo} alt="logo" />
    <div className="content__footer">
      <Informations
        icon={faMapMarkerAlt}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <div className="footer__content">
        <Informations
          icon={faPhoneAlt}
          text="+1-543-123-4567"
        />
        <Informations
          icon={faEnvelope}
          text="example@fylo.com"
        />
      </div>

      <ul className="footer__menu">
        <li className="footer__menu--li"><a href="#">About Us</a></li>
        <li className="footer__menu--li"><a href="#">Jobs</a></li>
        <li className="footer__menu--li"><a href="#">Press</a></li>
        <li className="footer__menu--li"><a href="#">Blog</a></li>
      </ul>
      <ul className="footer__menu">
        <li className="footer__menu--li"><a href="#">Contact Us</a></li>
        <li className="footer__menu--li"><a href="#">Terms</a></li>
        <li className="footer__menu--li"><a href="#">Privacy</a></li>
      </ul>

      <div className="footer__social-media">
        <a href="#" className="footer__social-media--logo">
          <ion-icon name="logo-facebook" />
        </a>
        <a href="#" className="footer__social-media--logo">
          <ion-icon name="logo-twitter" />
        </a>
        <a href="#" className="footer__social-media--logo">
          <ion-icon name="logo-instagram" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
