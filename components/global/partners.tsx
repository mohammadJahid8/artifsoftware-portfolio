import React from 'react';
import ProjectCard from './project-card';

import { partnersData, projectData } from '@/utils/constants';
import SectionTitle from './sec-title';
import Title from './title';
import PartnerCard from './partner-card';

const Partners = () => {
  return (
    <div className='px-4 xl:px-0 py-[60px] md:py-[120px]'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center pb-12'>
          <SectionTitle title='Partners' />
          <Title
            title='Trusted Staffing Partnerships'
            className='text-[32px] lg:text-[46px] leading-[1.3em]'
          />
          <p className='text-muted-foreground max-w-[405px] text-[17px]'>
            Long established fact that a reader will be distracted by the.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {partnersData.map((data, i) => (
            <PartnerCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
