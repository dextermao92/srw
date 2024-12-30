// src/Components/Team.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  // 获取律师团队数据
  const teamData = t('team.members', { returnObjects: true });

  return (
    <section className="team">
      <h3>{t('team.title')}</h3>
      <div className="team-list">
        {teamData && Array.isArray(teamData) && teamData.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h4>{member.name}</h4>
            <p>{member.title}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
