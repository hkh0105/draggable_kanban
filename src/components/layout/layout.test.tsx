import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { VscChecklist } from 'react-icons/vsc';

import Layout from './layout';

describe('Layout test', () => {
  beforeAll(() => {
    jest.mock('next/link', () => ({ children }: PropsWithChildren) => {
      return children;
    });
  });
  test('Layout render test', () => {
    render(<Layout />);

    expect(screen.getAllByTestId('icons').length).toEqual(2);
  });
});
