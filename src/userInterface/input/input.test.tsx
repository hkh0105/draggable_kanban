import { render, screen } from '@testing-library/react';

import Input from './input';

test('Button test', () => {
  render(<Input placeholder='test' />);

  expect(screen.queryByPlaceholderText('test')).toHaveAttribute(
    'placeholder',
    'test'
  );
});
