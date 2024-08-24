'use client';
/* eslint-disable @next/next/no-img-element */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MenuIcon,
  Phone,
  PhoneIncoming,
} from 'lucide-react';

import { cn, scrollToSection } from '@/lib/utils';
import Logo from './logo';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const phoneNumber = '01633909408';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header
      className={cn(
        'w-full z-40 bg-white transition-all duration-500 ease-in-out sticky top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]'
      )}
    >
      <div className='w-full max-w-[1850px] mx-auto flex h-[90px] items-center px-4 nav:px-6'>
        <Link href='#' className='flex mr-auto' prefetch={false}>
          <Logo url='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/sticky-logo-1.png' />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='nav:hidden'>
              <MenuIcon className='h-8 w-8 text-primary font-extrabold' />
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='max-w-[300px] bg-secondary border-none px-[15px]'
          >
            <SheetHeader className='mb-10'>
              <Logo url='https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/mobile-nav-logo.png' />
            </SheetHeader>
            <div className='grid py-6'>
              {menuItems.map((item, i) => (
                <Button
                  key={i}
                  variant='special'
                  size='special'
                  onClick={() => {
                    scrollToSection(item.href);
                    setOpen(false);
                  }}
                  className='flex w-full items-center text-[15px] font-medium h-[46px] text-white border-b border-white/15'
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <SheetFooter className='mt-4'>
              <div className='flex flex-col gap-4'>
                {/* <p className='flex gap-2.5 items-center'>
                  <Mail fill='white' className='bg-[#1f403d] p-1' />

                  <span className='text-[15px] font-medium text-white'>
                    info@example.com
                  </span>
                </p>
                <p className='flex gap-2.5 items-center'>
                  <Phone fill='white' className='bg-[#1f403d] p-1' />

                  <span className='text-[15px] font-medium text-white'>
                    444-000-777-66
                  </span>
                </p> */}

                <div className='flex gap-4 mt-4'>
                  <Button size='icon' className='bg-[#1f403d] rounded-full'>
                    <Facebook className='w-5 h-5' />
                  </Button>
                  <Button size='icon' className='bg-[#1f403d] rounded-full'>
                    <Linkedin className='w-5 h-5' />
                  </Button>
                  <Button size='icon' className='bg-[#1f403d] rounded-full'>
                    <Instagram className='w-5 h-5' />
                  </Button>
                </div>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <nav className='ml-auto hidden nav:flex items-center gap-2 2lg:gap-6'>
          {menuItems.map((item, i) => (
            <Button
              key={i}
              variant='special'
              size='special'
              onClick={() => scrollToSection(item.href)}
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white nav:px-2 2lg:px-4 py-2 nav:text-[16px] 2lg:text-lg font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
            >
              {item.label}
            </Button>
          ))}

          <div className='xl:ml-8 flex gap-4'>
            <Button
              onClick={handleCall}
              className='bg-primary w-[50px] h-[50px] flex items-center justify-center'
              size='icon'
            >
              <PhoneIncoming className='w-6 h-6' />
            </Button>

            <p className='flex flex-col gap-0.5'>
              <span className='text-lg text-[#a5b1ad] font-medium'>
                Request
              </span>
              <span className='text-sm text-black font-bold'>CONSULT CALL</span>
            </p>
          </div>
        </nav>
      </div>
    </header>

    // <header
    //   className={cn(
    //     'w-full z-40 bg-white transition-all duration-500 ease-in-out flex h-[90px] items-center px-4 md:px-6  py-8 ',
    //     isScrolled
    //       ? 'fixed top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]'
    //       : 'relative max-w-[1850px] mx-auto'
    //   )}
    // >

    // </header>
  );
}
