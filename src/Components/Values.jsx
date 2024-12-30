import React from 'react';
import { useTranslation } from 'react-i18next';

const Values = () => {
  const { t } = useTranslation();

  return (
    <section className="values-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4">{t('values.title')}</h2>
            <h4 className="mb-4">{t('values.subtitle')}</h4>
            <p className="lead">{t('values.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values; 