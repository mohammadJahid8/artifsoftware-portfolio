import React from 'react';
import SectionTitle from './sec-title';
import Image from 'next/image';
import Title from './title';
import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
const lora = Lora({ subsets: ['latin'] });

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto my-24 px-4 xl:px-0'>
      <div className='flex lg:flex-row flex-col items-start gap-16'>
        <div className='relative about-img flex-1 w-full mx-auto md:max-w-[500px] h-[700px] overflow-hidden group rounded-md '>
          <Image
            src='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/welcome-style1-img-2.jpg'
            width='0'
            height='0'
            quality={100}
            unoptimized
            priority
            alt='about'
            className='w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-md'
          />
        </div>
        <div className='flex-1'>
          <SectionTitle title='About our agency' />

          <Title
            title='Business Elevators and Career Crafters'
            className='text-[32px] lg:text-[46px]'
          />

          <div className='flex items-center mt-10 gap-2'>
            <SectionTitle title='Since' isIcon={false} />
            <div className='w-full md:w-[350px] h-[1px] bg-gray-200' />
          </div>
          <p
            className={cn(
              lora.className,
              'text-2xl leading-[34px] mt-4 font-medium'
            )}
          >
            <span className='text-primary text-[36px] lg:text-[48px]'>
              2014,
            </span>{' '}
            Provide staffing services.
          </p>

          <p className='text-muted-foreground py-6 text-[17px]'>
            Our being able to do what we like best, every pleasure is to be
            welcomed and every pain avoided but in certain circumstances and
            owing to the claims of duty or the obligations.
          </p>

          <div className='flex items-start md:flex-row flex-col gap-7 md:items-center'>
            <Image
              src='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/about-style1_2.jpg'
              width='0'
              height='0'
              quality={100}
              unoptimized
              priority
              alt='award'
              className='w-[150px] h-[150px] rounded-sm'
            />

            <div>
              <SectionTitle title='Our Awards' isIcon={false} />
              <h4 className={cn(lora.className, 'text-xl font-medium')}>
                Best Personnel Service Provider 2022 in Switzerland.
              </h4>
              <p className='uppercase text-[#a8a4a5] text-sm mt-2 font-semibold'>
                by Staffing Industry Analysts (SIA).
              </p>
            </div>
          </div>
          <p className='text-muted-foreground py-6 text-[17px]'>
            Every pleasure is to be welcomedand every pain avoided but in
            certain circumstances and owing to the claims of duty.
          </p>

          <Button
            className='hover:bg-secondary transition-all duration-300 text-white'
            size='lg'
          >
            MORE ABOUT US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
