import { todoState } from '@src/recoil';
import { TodoListType } from '@src/types';
import { render, screen } from '@testing-library/react';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';

jest.mock('recoil');
jest.mock('uuid');

describe('TodoList test', () => {
  beforeAll(() => {
    (useRecoilValue as jest.Mock).mockImplementation((selector) => {
      if (selector === todoState) {
        return [
          { title: 'Todo 1' },
          { title: 'Todo 2' },
          { title: 'Todo 3' },
        ] as TodoListType;
      }
    });
    (uuidv4 as jest.Mock).mockImplementation(() => {
      return '1';
    });
  });

  test('check title', async () => {
    render(<TodoList />);
    const dragableBoxes = screen.getAllByTestId('dragable-box');

    expect(dragableBoxes[0]).toHaveTextContent('Todo 1');
    expect(dragableBoxes[1]).toHaveTextContent('Todo 2');
    expect(dragableBoxes[2]).toHaveTextContent('Todo 3');
  });
});
