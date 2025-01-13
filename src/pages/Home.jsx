import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import Hero from '../components/Hero'
import ImageGrid from '../components/Essentials/ImageGrid';
import Frequentqes from '../components/Frequentqes';


const Home = () => {
 
  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
        <Hero />
        <ImageGrid />
        <Steps />
        <Frequentqes />
        <Testimonial />
    </div>
  );
};

export default Home;
