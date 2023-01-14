import { FC } from 'react';
import { Draggable, DraggableChildrenFn } from 'react-beautiful-dnd';

import { DragableBoxProps } from '@src/types';

const DragableBox: FC<DragableBoxProps> = ({ children, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          className='border-solid border-2 border-slate-500 w-9/10 h-auto rounded-md m-4 text-left indent-4'
          data-testid='dragable-box'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          draggable
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default DragableBox;
