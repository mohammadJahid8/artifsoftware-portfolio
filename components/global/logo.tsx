/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Logo = ({ url }: { url: string }) => {
  return (
    <img
      src={url}
      className='w-[140px] h-[30px] nav:w-full nav:h-[30px] lg:w-full lg:h-[40px]'
      alt='logo'
    />
  );
};

export default Logo;
