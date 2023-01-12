import { useRecoilState } from 'recoil';

import { todoState } from '@src/recoil';
import { Todo, TodoListType } from '@src/types';

const useTodo = () => {
  const [todo, setTodo] = useRecoilState<TodoListType>(todoState);

  const addTodo = (value: string) => {
    const tempTodo: Todo = {
      id: todo.length + 1,
      title: value,
      status: 'todo',
    };

    setTodo([...todo, tempTodo]);
  };

  return { addTodo, todo };
};

export default useTodo;
