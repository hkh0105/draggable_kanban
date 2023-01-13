import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Box from '@src/userInterface/box/box';
import { DroppableBoxProps } from '@src/types';

const DroppableBox: FC<DroppableBoxProps> = ({ status, children }) => {
  return (
    <Droppable droppableId={status} key={uuidv4()}>
      {(provided) => (
        <>
          <Box>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='w-full h-full'
            >
              {status.toUpperCase()}
              {children}
            </div>
          </Box>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
};

export default DroppableBox;
