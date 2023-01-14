import { render, screen } from '@testing-library/react';
import { Draggable } from 'react-beautiful-dnd';

import DragableBox from './dragableBox';

jest.mock('react-beautiful-dnd');

describe('Drag Test', () => {
  beforeAll(() => {
    (Draggable as jest.Mock).mockImplementation((test) => {
      return (
        <div
          className='border-solid border-2 border-slate-500 w-9/10 h-auto rounded-md m-4 text-left indent-4'
          data-testid='dragable-box'
          draggable
        >
          test
        </div>
      );
    });
  });

  test('DragableBox test', () => {
    render(
      <DragableBox id={'test'} index={1}>
        test
      </DragableBox>
    );

    expect(screen.getByTestId('dragable-box')).toHaveTextContent('test');
  });
});
