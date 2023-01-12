import { useInput } from '../../hooks/useInput';
import { todoState } from '../../recoil';
import Button from '../../userInterface/button/button';
import { Todo, TodoListType } from '../../types';
import Input from '../../userInterface/input/input';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

const TodoForm: FC = () => {
  const { value, onChange } = useInput('');
  const [todo, setTodo] = useRecoilState<TodoListType>(todoState);

  const addTodoHandler = () => {
    const tempTodo: Todo = {
      id: todo.length + 1,
      title: value,
      status: 'todo',
    };

    setTodo([...todo, tempTodo]);
  };

  return (
    <>
      <Input placeholder='todo 제목을 입력해주세요' onChange={onChange} />
      <Button label='add' onClick={addTodoHandler} />
    </>
  );
};

export default TodoForm;
