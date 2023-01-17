import { FC, PropsWithChildren } from 'react';

import NavigationBar from './navigationBar/navigationBar';
import Section from './section/Section';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Section>{children}</Section>
    </>
  );
};

export default Layout;
