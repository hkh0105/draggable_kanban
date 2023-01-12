import { atom } from 'recoil';
import { TodoListType } from '@src/types';

export const todoState = atom<TodoListType>({
  key: 'todoList',
  default: [
    {
      id: 1,
      title: 'todo 1',
      content: 'Initial Content by Han',
      status: 'todo',
    },
    {
      id: 2,
      title: 'todo 2',
      content: 'Second Content by Han',
      status: 'todo',
    },
  ],
});
