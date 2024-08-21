import About from '@/components/global/about';
import Banner from '@/components/global/banner';
import ChooseUs from '@/components/global/choose-us';
import Marquee from '@/components/global/marquee';
import Projects from '@/components/global/projects';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <About />
      <Projects />
      <ChooseUs />
    </div>
  );
};

export default Home;
