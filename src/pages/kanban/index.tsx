import TodoForm from '@src/components/todoform/todoform';
import TodoList from '@src/components/todoList/todoList';
import type { NextPage } from 'next';

const Todo: NextPage = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todo;
