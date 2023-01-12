import { todoState } from '@src/recoil';
import { TodoListType } from '@src/types';
import Box from '@src/userInterface/box/box';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import DragableBox from '@src/userInterface/dragableBox/dragableBox';

const TodoList: FC = () => {
  const todoList = useRecoilValue<TodoListType>(todoState);
  return (
    <Box>
      {todoList.map((todo) => (
        <DragableBox key={uuidv4()}>{todo.title}</DragableBox>
      ))}
    </Box>
  );
};

export default TodoList;
