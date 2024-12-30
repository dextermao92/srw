// src/Components/Banner.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div id="#services" className="banner">
      <Container className="text-center">
        <h1 className="banner-title">{t('banner.welcome')}</h1>
        {/* <p className="banner-description">{t('banner.description')}</p> */}
      </Container>
    </div>
  );
};

export default Banner;
