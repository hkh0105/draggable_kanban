import Box from '@src/userInterface/box/box';
import { render, screen } from '@testing-library/react';
import { PropsWithChildren, ReactNode } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import DroppableBox from './droppableBox';

jest.mock('uuid');
jest.mock('react-beautiful-dnd', () => {
  const lib = jest.requireActual<typeof import('react-beautiful-dnd')>(
    'react-beautiful-dnd'
  );

  return {
    ...lib,
    Droppable: () => (
      <div>
        <>
          <Box>
            <div className='w-full h-full'>test</div>
          </Box>
        </>
      </div>
    ),
  };
});

describe('DroppableBox Test', () => {
  beforeAll(() => {
    (uuidv4 as jest.Mock).mockImplementation(() => {
      return '1';
    });
  });

  test('DroppableBox test', () => {
    render(<DroppableBox status={'test'} key={uuidv4()} />);

    expect(screen.getByText('test')).toHaveTextContent('test');
  });
});
