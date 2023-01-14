import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { VscChecklist } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='flex w-screnn h-20  bg-stone-50'>
        <Link href='/'>
          <AiOutlineHome className='h-full w-12' data-testid='icons' />
        </Link>
        <Link href='/kanban'>
          <VscChecklist className='h-full w-12' data-testid='icons' />
        </Link>
      </div>
      <div className='lg:w-screen h-screen bg-stone-50 flex-col flex items-center'>
        {children}
      </div>
    </>
  );
};

export default Layout;
