import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { initailTodo } from '@src/recoil';
import useTodo from './useTodo';

describe('useTodo Test', () => {
  test('addTodo function unit test', () => {
    const { result } = renderHook(() => useTodo(), {
      wrapper: RecoilRoot,
    });

    const { todo, addTodo } = result.current;

    expect(todo).toEqual(initailTodo);

    act(() => {
      addTodo('Test');
    });

    const todoList = [
      ...initailTodo,
      {
        id: 3,
        status: 'todo',
        title: 'Test',
      },
    ];
    expect(result.current.todo).toEqual(todoList);
  });
});
