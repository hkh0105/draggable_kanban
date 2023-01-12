import { todoState } from '../../recoil/index';
import { TodoFormRecoilObserverProps, TodoListType } from '@src/types';
import userEvent from '@testing-library/user-event';
import { render, renderHook, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';

import TodoForm from './todoform';

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
