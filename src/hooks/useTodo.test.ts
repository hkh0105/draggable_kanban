import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { initailTodo } from '@src/recoil';
import useTodo from './useTodo';
import { TodoListType } from '@src/types';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');

describe('useTodo Test', () => {
  beforeAll(() => {
    (uuidv4 as jest.Mock).mockImplementation(() => {
      return '1';
    });
  });

  test('addTodo function unit test', () => {
    const { result } = renderHook(() => useTodo(), {
      wrapper: RecoilRoot,
    });

    const { todo, addTodo } = result.current;

    expect(todo).toEqual(initailTodo);

    act(() => {
      addTodo('Test');
    });

    const todoList: TodoListType = [
      ...initailTodo,
      {
        id: uuidv4(),
        status: 'todo',
        title: 'Test',
      },
    ];
    expect(result.current.todo).toEqual(todoList);
  });
  test('patchTodo function unit test', () => {
    const { result } = renderHook(() => useTodo(), {
      wrapper: RecoilRoot,
    });

    const { todo, patchTodo } = result.current;

    expect(todo).toEqual(initailTodo);

    const id = todo[0].id;
    act(() => {
      patchTodo('status', 'inProgress', id);
    });

    expect(result.current.todo[0].status).toEqual('inProgress');
  });
});
