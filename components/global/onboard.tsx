import { Lora } from 'next/font/google';
import Title from './title';
import { cn } from '@/lib/utils';
import {
  ArrowRightIcon,
  ChevronRight,
  Mail,
  MessageCircleQuestion,
  SquareArrowOutUpRight,
} from 'lucide-react';
import SectionTitle from './sec-title';
import { Button } from '../ui/button';
const lora = Lora({ subsets: ['latin'] });

const Onboard = () => {
  return (
    <div className='bg-secondary px-4 xl:px-0 py-[60px] md:py-[120px] 2xl:max-w-[1800px]  md:mx-12 4xl:mx-auto md:rounded-md relative z-10'>
      <div className='flex flex-col gap-6 justify-center items-center text-center pb-12 '>
        <Title
          title='Onboard Remote Staff Quickly'
          className='text-[32px] lg:text-[46px] leading-[1.3em] text-white'
        />
        <p className='text-[#a5b1ad] text-[17px]'>
          Effortlessly tap into skilled remote talent with our simplified
          hiring.
        </p>

        <div
          className={cn(
            'flex lg:flex-row flex-col items-center gap-6 lg:gap-10 mt-3 mb-3 md:mb-0',
            lora.className
          )}
        >
          <div className='flex items-center gap-2'>
            <SquareArrowOutUpRight className='text-primary w-6 h-6' />
            <span className='text-xl text-white'>Contract / Temprory</span>
          </div>
          <div className='flex items-center gap-2'>
            <SquareArrowOutUpRight className='text-primary w-6 h-6' />
            <span className='text-xl text-white'>Permanent Placement</span>
          </div>
          <div className='flex items-center gap-2'>
            <SquareArrowOutUpRight className='text-primary w-6 h-6' />
            <span className='text-xl text-white'>Placement Permanent</span>
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center gap-6'>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <SectionTitle title='Have question?' isIcon={false} />

            <a
              href='#'
              className='text-white hover:text-primary font-medium text-[17px] inline-flex items-center'
            >
              Explore our FAQ section
              <ChevronRight className='w-5 h-5 mt-1 transition-all duration-500 ease-in-out group-hover:opacity-0' />
            </a>
          </div>

          <div className='flex items-center'>
            <Button
              size='icon'
              className='rounded-full bg-white text-muted-foreground border border-black hover:text-white w-[70px] h-[70px]'
            >
              <MessageCircleQuestion className='w-7 h-7' />
            </Button>
            {/* <Button
              size='icon'
              className='rounded-full bg-white text-muted-foreground border border-black hover:text-white w-[70px] h-[70px] -ml-[15px]'
            >
              <Mail className='w-7 h-7' />
            </Button> */}
          </div>

          {/* <div className='flex flex-col items-center md:items-start gap-2'>
            <SectionTitle title='Email Us' isIcon={false} />

            <a
              href='#'
              className='text-white hover:text-primary font-medium text-[17px]'
            >
              info@example.com
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Onboard;
