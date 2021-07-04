import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <li className="footer__item">
        <NavLink to="/plan-du-site">Plan du site</NavLink>
      </li>
      <li className="footer__item">
        <NavLink to="/mentions-legales">Mentions légales</NavLink>
      </li>
      <li className="footer__item">
        <NavLink to="/a-propos">À propos de nous</NavLink>
      </li>
    </ul>
    <p className="footer__seo"> French Connection est une communauté francophone qui vous aide à voyager dans le monde entier.</p>
    <p className="footer__ref"> @2021, French Connection - Clémence, Laurent, Lucas, Thomas & Tom </p>
  </div>
);

export default Footer;
