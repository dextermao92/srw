// src/Components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>{t("footer.company")}</h4>
            <p onClick={() => window.location.href='/team'}>{t("footer.our_team")}</p>
            <p onClick={() => window.location.href='/about'}>{t("footer.about_us")}</p>
          </div>
          <div className="footer-column">
            <h4>{t("footer.contact_us")}</h4>
            <p onClick={() => window.location.href='/contact'}>{t("footer.contact_us")}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-acknowledgement">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;