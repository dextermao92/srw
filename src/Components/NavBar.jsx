// src/Components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Brand from '../Assets/images/brand.png';

const CustomNavbar = ({ currentLang, toggleLanguage }) => {
  const { t } = useTranslation();

  const languageIcon = currentLang === 'zh' 
    ? `${process.env.PUBLIC_URL}/assets/icons/english.png`
    : `${process.env.PUBLIC_URL}/assets/icons/chinese.png`;

  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar" fixed="top">
      <Container className="navbar-content">
        <Navbar.Brand as={NavLink} to="/" className="navbar-left">
          <img 
            src={Brand} 
            alt="Brand Logo" 
            className="navbar-logo"
          />
        </Navbar.Brand>
        <div className="navbar-right">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-links">
            <Nav>
              <Nav.Link as={NavLink} to="/" exact>
                {t('navbar.home')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                {t('navbar.about')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/team">
                {t('navbar.team')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                {t('navbar.contact')}
              </Nav.Link>
            </Nav>
            <img 
              src={languageIcon} 
              alt="Language Toggle" 
              onClick={toggleLanguage} 
              className="language-toggle-icon"
            />
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
