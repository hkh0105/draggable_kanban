import { VscChecklist } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';
import { FC } from 'react';
import Link from 'next/link';

const NavigationBar: FC = () => {
  return (
    <div className='flex w-screen h-20  bg-stone-50'>
      <Link href='/'>
        <AiOutlineHome className='h-full w-12' data-testid='icons' />
      </Link>
      <Link href='/kanban'>
        <VscChecklist className='h-full w-12' data-testid='icons' />
      </Link>
    </div>
  );
};

export default NavigationBar;
