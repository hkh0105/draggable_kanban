import { render, screen } from '@testing-library/react';

import Button from './button';

test('Button test', () => {
  render(<Button label='Button' />);

  expect(screen.getByText('Button')).toHaveTextContent('Button');
});
