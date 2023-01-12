import { useInput } from '../../hooks/useInput';
import { todoState } from '../../recoil';
import Button from '../../userInterface/button/button';
import { Todo, TodoListType } from '../../types';
import Input from '../../userInterface/input/input';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import useTodo from '@src/hooks/useTodo';

const TodoForm: FC = () => {
  const { value, onChange } = useInput('');
  const { addTodo } = useTodo();

  const clickAddHandler = () => {
    addTodo(value);
  };

  return (
    <>
      <Input placeholder='todo 제목을 입력해주세요' onChange={onChange} />
      <Button label='add' onClick={clickAddHandler} />
    </>
  );
};

export default TodoForm;
