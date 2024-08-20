import About from '@/components/global/about';
import Banner from '@/components/global/banner';
import Marquee from '@/components/global/marquee';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <About />
    </div>
  );
};

export default Home;
