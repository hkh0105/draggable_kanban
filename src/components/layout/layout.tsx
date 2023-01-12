import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='lg:w-screen h-screen bg-stone-50 flex-col flex items-center'>
      {children}
    </div>
  );
};

export default Layout;
