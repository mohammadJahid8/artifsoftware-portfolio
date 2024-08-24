/* eslint-disable @next/next/no-img-element */
import {
  MoveDownLeft,
  MoveDownRight,
  MoveLeft,
  MoveRight,
  MoveUpLeft,
  MoveUpRight,
} from 'lucide-react';

import SectionTitle from './sec-title';
import Title from './title';
import Features from './features';

const ChooseUs = () => {
  return (
    <div
      id='why-us'
      className='bg-white px-4 xl:px-0 py-[60px] md:pt-[120px] md:-mb-[190px]'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center pb-12'>
          <SectionTitle title='Why Choose Us' />
          <Title
            title='Advantages of Working With Us'
            className='text-[32px] lg:text-[46px] leading-[1.3em]'
          />
          <p className='text-muted-foreground max-w-[405px] text-[17px]'>
            Long established fact that a reader will be distracted by the
            readable content of a page.
          </p>
        </div>

        <div className='relative flex items-center justify-center'>
          <div className='flex flex-col 2lg:flex-row items-center 2lg:items-start gap-12 2lg:gap-0 2lg:space-x-4'>
            <div className='relative z-10 flex flex-col items-end gap-12 2lg:-mr-[110px] 2lg:mt-[100px]'>
              <Features
                icon={
                  <MoveDownRight className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Reduce Hiring Risks'
                className=''
                order='01'
              />
              <Features
                icon={
                  <MoveRight className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Deeper Talent Pools'
                className='flex-row-reverse'
                order='03'
              />
              <Features
                icon={
                  <MoveUpRight className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Employer Branding'
                className=''
                order='05'
              />
            </div>

            <div className='relative hidden md:block z-[1] choose-bg w-[640px] h-[640px] order-last 2lg:order-none '>
              <div className='w-[350px] h-[460px] pt-[50px] mx-auto'>
                <img
                  src='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/why-choose-v1-1.png'
                  alt='Vector Image'
                  className=''
                />
              </div>
            </div>

            <div className='relative z-10 flex flex-col gap-12 items-start 2lg:!-ml-[110px] 2lg:mt-[100px]'>
              <Features
                icon={
                  <MoveDownLeft className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Increase Efficiencies'
                className='flex-row-reverse'
                order='02'
              />
              <Features
                icon={
                  <MoveLeft className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Onboarding Support'
                className=''
                order='04'
              />
              <Features
                icon={
                  <MoveUpLeft className='text-primary hover:text-white w-5 h-5 md:w-7 md:h-7' />
                }
                label='Industry Knowledge'
                className='flex-row-reverse'
                order='06'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
