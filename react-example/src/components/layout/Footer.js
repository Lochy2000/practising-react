import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Creative Space</h3>
            <p className="footer__text">
              Building beautiful experiences with React
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#projects" className="footer__link">Projects</a></li>
              <li><a href="#skills" className="footer__link">Skills</a></li>
              <li><a href="#about" className="footer__link">About</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Connect</h4>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="GitHub">🐙</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">💼</a>
              <a href="#" className="footer__social-link" aria-label="Email">📧</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {currentYear} Creative Space. Made with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
