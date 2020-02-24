import React from 'react';
import { MdImage, MdDelete } from 'react-icons/md';
import { TaskOptionsContainer, Item } from './TaskOptions.style';

const TaskOptions = () => {
  return (
    <TaskOptionsContainer>
      <Item>
        <MdImage />
        <span>Image</span>
      </Item>
      <Item>
        <MdDelete />
        <span>Delete</span>
      </Item>
    </TaskOptionsContainer>
  );
};

export default TaskOptions;
