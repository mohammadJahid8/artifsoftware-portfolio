import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        lora.className,
        'text-[46px] leading-[1.3em] font-medium',
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
