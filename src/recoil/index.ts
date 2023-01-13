import { atom, selector } from 'recoil';
import { TodoListType } from '@src/types';
import { v4 as uuidv4 } from 'uuid';

export const initailTodo = [
  {
    id: uuidv4(),
    title: 'todo 1',
    content: 'Initial Content by Han',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: 'todo 2',
    content: 'Second Content by Han',
    status: 'todo',
  },
];

export const todoState = atom<TodoListType>({
  key: 'todoList',
  default: initailTodo,
});

export const completedTodoState = selector<TodoListType>({
  key: 'todoList/completed',
  get: ({ get }) => {
    const list = get(todoState);

    return list.filter((item) => item.status === 'completed');
  },
});

export const normalTodoState = selector<TodoListType>({
  key: 'todoList/todo',
  get: ({ get }) => {
    const list = get(todoState);

    return list.filter((item) => item.status === 'todo');
  },
});

export const inProgressTodoState = selector<TodoListType>({
  key: 'todoList/inProgress',
  get: ({ get }) => {
    const list = get(todoState);

    return list.filter((item) => item.status === 'inProgress');
  },
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListState = selector<TodoListType>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.status === 'completed');
      case 'Show InProgress':
        return list.filter((item) => item.status === 'inProgress');
      case 'Show Todo':
        return list.filter((item) => item.status === 'todo');
      default:
        return list;
    }
  },
});
