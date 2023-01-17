import { rest } from 'msw';
import { PATH } from '@src/constant/path';
import fs from 'fs';
import { TodoListType } from '@src/types';

const BASE_URL = process.env.NEXT_PUBLIC_TEST_SERVER;
const data: { todo: TodoListType } = {
  todo: [
    {
      id: '123-23-2323',
      title: 'todo 1',
      content: 'Initial Content by Han',
      status: 'todo',
    },
    {
      id: '15242323-23231',
      title: 'todo 2',
      content: 'Second Content by Han',
      status: 'todo',
    },
  ],
};

export const handlers = [
  rest.get('https://example.dev/' + PATH.getTodo, (req, res, ctx) => {
    const todoList: TodoListType = data.todo;

    return res(ctx.json(todoList));
  }),
];
