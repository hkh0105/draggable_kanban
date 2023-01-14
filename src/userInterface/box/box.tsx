import { FC, PropsWithChildren } from 'react';

const Box: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='border-solid border-2 border-slate-500 w-2/3 h-1/5 rounded-md'>
      {children}
    </div>
  );
};

export default Box;
