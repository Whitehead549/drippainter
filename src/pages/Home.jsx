import React, { useEffect, useState } from 'react';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import DailyStats from '../components/Essentials/DailyStats';
import PerService from '../components/Essentials/PerService';
import Hero from '../components/Hero'
import ImageGrid from '../components/Essentials/ImageGrid';


const Home = () => {
 
  return (
    <div className="bg-[#e0e7e9] overflow-x-hidden">
        <Hero />
        <ImageGrid />
        <Steps />
        <Testimonial />
        <DailyStats />
        <PerService />
       
      
    </div>
  );
};

export default Home;
