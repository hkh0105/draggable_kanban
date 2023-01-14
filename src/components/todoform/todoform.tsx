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
    <div className='flex my-3 w-full justify-center'>
      <Input
        placeholder='todo 제목을 입력해주세요'
        onChange={onChange}
        className='border-solid border-2 border-slate-500 rounded-md w-1/3'
      />
      <Button label='add' onClick={clickAddHandler} className='mx-4' />
    </div>
  );
};

export default TodoForm;
