import useTodo from '@src/hooks/useTodo';
import { todoState } from '@src/recoil';
import { Todo, TodoListType } from '@src/types';
import Box from '@src/userInterface/box/box';
import Button from '@src/userInterface/button/button';
import Input from '@src/userInterface/input/input';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

const todoDetail: NextPage = () => {
  const [todoList, setTodoList] = useRecoilState<TodoListType>(todoState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const router = useRouter();
  const { putTodo } = useTodo();
  const { id: todoId } = router.query;
  const todo: Todo = todoList.find((todo) => todo.id === todoId) as Todo;
  if (!todo) router.push('/404');
  const [editedTodo, setEditedTodo] = useState<Todo>(todo);

  const editButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit(false);
    putTodo(editedTodo);
  };

  const editButtonProps = {
    label: isEdit ? '완료' : '수정하기',
    onClick: isEdit
      ? editButtonHandler
      : (event: MouseEvent<HTMLButtonElement>) => setIsEdit(true),
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const key = event.target.id;
    const tempTodo = { ...editedTodo, [key]: value };
    setEditedTodo(tempTodo);
  };

  return (
    <Box className='flex-col flex items-center justify-content: space-between'>
      <p className='my-3'>Todo</p>
      <Box className='my-3'>
        Title :
        <Input
          id='title'
          disabled={!isEdit}
          autoFocus={!isEdit}
          defaultValue={editedTodo.title}
          onChange={onChange}
          placeholder={''}
        />
      </Box>
      <Box className='my-3'>
        Content :
        <Input
          id='content'
          disabled={!isEdit}
          defaultValue={editedTodo.content}
          onChange={onChange}
          placeholder={''}
        />
      </Box>
      <Box className='my-3'>
        Status :
        <Input
          id='status'
          disabled={!isEdit}
          defaultValue={editedTodo.status}
          onChange={onChange}
          placeholder={''}
        />
      </Box>
      <Button {...editButtonProps} className='mb-3' />
    </Box>
  );
};

export default todoDetail;
