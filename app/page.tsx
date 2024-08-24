import About from '@/components/global/about';
import Banner from '@/components/global/banner';
import ChooseUs from '@/components/global/choose-us';
import Employees from '@/components/global/employees';
import Marquee from '@/components/global/marquee';
import Onboard from '@/components/global/onboard';
import Partners from '@/components/global/partners';
import Pricing from '@/components/global/pricing';
import Projects from '@/components/global/projects';
import ServiceArea from '@/components/global/service-area';
import Testimonials from '@/components/global/testimonials';
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
      <ServiceArea />
      <Testimonials />
      <Partners />
      <Pricing />
    </div>
  );
};

export default Home;
