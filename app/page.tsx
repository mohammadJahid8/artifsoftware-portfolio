import About from '@/components/global/about';
import Banner from '@/components/global/banner';
import ChooseUs from '@/components/global/choose-us';
import Employees from '@/components/global/employees';
import Marquee from '@/components/global/marquee';
import Onboard from '@/components/global/onboard';
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
      <Onboard />
      <Employees />
    </div>
  );
};

export default Home;
