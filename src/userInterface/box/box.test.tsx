import { render, screen } from '@testing-library/react';

import Box from './Box';

test('Box test', () => {
  render(<Box>test</Box>);

  expect(screen.getByText('test')).toHaveTextContent('test');
});
