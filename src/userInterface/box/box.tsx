import { FC, ReactNode } from 'react';

import { BoxProps } from '@src/types';
const Box: FC<BoxProps> = ({ children, className }) => {
  const basicClassName =
    'border-solid border-2 border-slate-500 w-2/3 h-1/5 rounded-md ' +
    className;
  return <div className={basicClassName}>{children}</div>;
};

export default Box;
