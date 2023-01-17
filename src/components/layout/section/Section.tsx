import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='lg:w-screen h-screen bg-stone-50 flex-col flex items-center'>
      {children}
    </section>
  );
};

export default Section;
