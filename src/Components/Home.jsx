// src/Components/Home.js
import React from 'react';
import Banner from '../Components/Banner';
import Values from '../Components/Values';
import Services from '../Components/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <Values />
      <Services />
      {/* 其他组件 */}
    </>
  );
};

export default Home;
