import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';

import Error404 from './404';

describe('404 Page', () => {
  beforeAll(() => {
    jest.mock('next/link', () => ({ children }: PropsWithChildren) => {
      return children;
    });
  });
  test('404 page test', async () => {
    render(<Error404 />);

    expect(screen.getByText('404 - page Not Fount')).toBeTruthy();
    expect(screen.getByText('home')).toBeTruthy();
  });
});
