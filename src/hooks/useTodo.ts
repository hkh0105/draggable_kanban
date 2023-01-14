import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { todoState } from '@src/recoil';
import { Todo, TodoListType } from '@src/types';

const useTodo = () => {
  const [todo, setTodo] = useRecoilState<TodoListType>(todoState);

  const addTodo = (value: string) => {
    const tempTodo: Todo = {
      id: uuidv4(),
      title: value,
      status: 'todo',
    };

    setTodo([...todo, tempTodo]);
  };

  const patchTodo = <T>(key: string, value: T, todoId: string) => {
    const tempTodoList = [...todo];
    const originTodo = tempTodoList.find((todo) => todo.id === todoId);
    if (!originTodo) return;

    const originIndex = tempTodoList.indexOf(originTodo);
    const newTodo = { ...originTodo, [key]: value };
    tempTodoList.splice(originIndex, 1, newTodo);
    setTodo([...tempTodoList]);
  };

  return { addTodo, todo, patchTodo };
};

export default useTodo;
