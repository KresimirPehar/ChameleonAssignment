import React from 'react';
import { MdImage, MdDelete } from 'react-icons/md';
import { TaskOptionsContainer, Item } from './TaskOptions.style';

const TaskOptions = ({ id, onDelete }) => {
  const onDeleteTask = () => onDelete(id);

  return (
    <TaskOptionsContainer>
      <Item>
        <MdImage />
        <span>Image</span>
      </Item>
      <Item onClick={onDeleteTask}>
        <MdDelete />
        <span>Delete</span>
      </Item>
    </TaskOptionsContainer>
  );
};

export default TaskOptions;
