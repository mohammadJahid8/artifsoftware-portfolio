'use client';

import { Rss } from 'lucide-react';

export default function TopNav() {
  const email = 'contact.artifsoftware@gmail.com';

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className='bg-secondary hidden md:block'>
      <div className='max-w-[1850px] mx-auto text-white flex justify-between items-center px-4 md:px-6 py-2.5'>
        <div
          onClick={handleEmail}
          className='flex items-center space-x-2 cursor-pointer hover:underline'
        >
          <Rss className='text-green-500' />
          <span className='text-[#a5b1ad]'>Start a project</span>
        </div>
        <div className='flex items-center space-x-5'>
          <span className='text-[#a5b1ad]'>
            Your Next Project Starts with Us
          </span>
          {/* <div className='flex items-center space-x-2'>
            <Vibrate className='text-green-500' />
            <span className='text-[#a5b1ad]'>(+41)-888.56.7890</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Mail className='text-green-500' />
            <span className='text-[#a5b1ad]'>info@example.com</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
