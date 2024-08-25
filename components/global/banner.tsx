import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';
import React from 'react';
import MoreBtn from './more-btn';

const lora = Lora({ subsets: ['latin'] });

const Banner = () => {
  return (
    <div
      id='home'
      className='px-4 xl:px-0 min-h-[50vh] h-auto'
      style={{
        position: 'relative',
        backgroundImage:
          'url("https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/slide-v1-3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '0',
          zIndex: '1',
          background:
            'linear-gradient(to right, rgba(6, 42, 38, 6) 0%, transparent 100%)',
        }}
      />

      <div className='relative z-10 max-w-[1200px] mx-auto py-32 md:py-64'>
        <h1
          className={cn(
            lora.className,
            'text-[50px] md:text-[80px] text-white font-medium leading-[1.1em]'
          )}
        >
          Transform Your Digital Presence with Expert Web Solutions
        </h1>
        <h3 className='text-[17px] text-[#e2ece9] font-medium leading-[28px] max-w-[500px] pt-8 pb-4'>
          Artif software offers top-notch web design and development services,
          including UI/UX design, advanced development, and AI solutions.
        </h3>
        <MoreBtn to='about' label='READ MORE' />
      </div>
    </div>
  );
};

export default Banner;
