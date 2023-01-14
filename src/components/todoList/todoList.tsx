import {
  completedTodoState,
  inProgressTodoState,
  normalTodoState,
} from '@src/recoil';
import { Todo, TodoListType, TodoStatusType } from '@src/types';
import { v4 as uuidv4 } from 'uuid';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import DragableBox from '@src/userInterface/dragableBox/dragableBox';
import useTodo from '@src/hooks/useTodo';
import DroppableBox from '@src/components/droppableBox/droppableBox';

const TodoList: FC = () => {
  const todoProgressTodoList = useRecoilValue<TodoListType>(normalTodoState);
  const inProgressTodoList = useRecoilValue<TodoListType>(inProgressTodoState);
  const completedTodoList = useRecoilValue<TodoListType>(completedTodoState);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const { patchTodo } = useTodo();
  const statusList: TodoStatusType[] = [
    { items: todoProgressTodoList, name: 'todo' },
    { items: inProgressTodoList, name: 'inProgress' },
    { items: completedTodoList, name: 'completed' },
  ];

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const dropHandler = (result: DropResult) => {
    const { destination, draggableId } = result;
    if (!destination?.droppableId) return;

    const newStatus: string = destination?.droppableId;
    const todoId: string = draggableId;
    patchTodo('status', newStatus, todoId);
  };

  return (
    <>
      {isBrowser && (
        <DragDropContext onDragEnd={dropHandler}>
          {statusList.map((status: TodoStatusType) => (
            <DroppableBox status={status.name} key={uuidv4()}>
              {status.items.map((todo: Todo, index) => (
                <DragableBox key={uuidv4()} id={todo.id} index={index}>
                  {todo.title}
                </DragableBox>
              ))}
            </DroppableBox>
          ))}
        </DragDropContext>
      )}
    </>
  );
};

export default TodoList;
