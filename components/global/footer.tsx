import { menuItems } from '@/utils/constants';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary'>
      <div className='w-full mx-auto max-w-[1850px] p-4 md:flex items-center md:justify-between'>
        <span className='text-sm text-[#a5b1ad] flex justify-center'>
          © {currentYear}{' '}
          <a href='#' className='hover:underline'>
            Artif Software
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex justify-center flex-wrap gap-4 md:gap-6 items-center mt-3 text-sm font-medium text-[#a5b1ad] sm:mt-0'>
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className='hover:underline'
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
