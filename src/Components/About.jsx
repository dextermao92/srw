// src/Components/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../Assets/images/harry_song-2.jpeg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-container">
      <div className="about-content">
        <h1>{t('about.title')}</h1>
        <div className="about-details">
          {/* 左侧照片 */}
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          {/* 右侧简介 */}
          <div>
            <p>{t('about.content.paragraph_1')}</p>
            <p>{t('about.content.paragraph_2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
