import { FC, PropsWithChildren } from 'react';

const Box: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Box;
