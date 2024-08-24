/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Logo = ({ url }: { url: string }) => {
  return (
    <img
      src={url}
      className='w-[140px] h-[47px] nav:w-[120px] nav:h-[37px] lg:w-[140px] lg:h-[47px]'
      alt='logo'
    />
  );
};

export default Logo;
