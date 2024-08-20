import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Marquee = () => {
  return (
    <div className='marquee overflow-hidden whitespace-nowrap bg-secondary py-4 relative'>
      <div className='marquee-content flex space-x-8'>
        <div className='relative text-gray-200 text-sm flex items-center'>
          Business Development Manager, San Fransisco, CA.{' '}
          <Link
            href='#'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Link>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='green-line mr-8' />
          Business Development Manager, San Fransisco, CA.{' '}
          <Link
            href='#'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Link>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='green-line mr-8' />
          Business Development Manager, San Fransisco, CA.{' '}
          <Link
            href='#'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Link>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='green-line mr-8' />
          Business Development Manager, San Fransisco, CA.{' '}
          <Link
            href='#'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Link>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='green-line mr-8' />
          Business Development Manager, San Fransisco, CA.{' '}
          <Link
            href='#'
            className='text-white font-semibold ml-1 inline-flex gap-1 items-center'
          >
            EXPLORE MORE <ChevronRight className='w-5 h-5' />
          </Link>
        </div>
        <div className='relative text-gray-200 text-sm flex items-center'>
          <div className='green-line mr-8' />
          Business Development Manager, San Fransisco, CA.{' '}
          <Link href='#' className='text-white font-semibold'>
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
