import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');

import TodoForm from './todoform';
describe('TodoList test', () => {
  beforeAll(() => {
    (uuidv4 as jest.Mock).mockImplementation(() => {
      return '1';
    });
  });
  test('TodoForm  Test', async () => {
    const { queryByPlaceholderText, getByText } = render(
      <RecoilRoot>
        <TodoForm />
      </RecoilRoot>
    );

    expect(queryByPlaceholderText('todo 제목을 입력해주세요')).toHaveAttribute(
      'placeholder',
      'todo 제목을 입력해주세요'
    );
    expect(getByText('add')).toHaveTextContent('add');
  });
});
