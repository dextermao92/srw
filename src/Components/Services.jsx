// src/Components/Services.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = t('services.items', { returnObjects: true });

  return (
    <section className="container py-5">
      <h3 className="text-center mb-4">{t('services.title')}</h3>
      <div className="row g-4">
        {servicesData && Array.isArray(servicesData) && servicesData.map((service, index) => (
          <div key={index} className="col-md-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <img src={service.icon} alt={`${service.category} icon`} className="mb-3" style={{width: "64px"}} />
                <h4 className="card-title">{service.category}</h4>
                <ul className="list-group">
                  <li className="list-group-item">{service.item1}</li>
                  <li className="list-group-item">{service.item2}</li>
                  <li className="list-group-item">{service.item3}</li>
                  <li className="list-group-item">{service.item4}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
