'use client';
import { scrollToSection } from '@/lib/utils';
import { Button } from '../ui/button';

const MoreBtn = ({ to, label }: { to: string; label: string }) => {
  return (
    <Button
      onClick={() => scrollToSection(to)}
      className='hover:bg-secondary transition-all duration-300'
      size='lg'
    >
      {label}
    </Button>
  );
};

export default MoreBtn;
