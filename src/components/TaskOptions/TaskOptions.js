import React from 'react';
import { MdImage, MdDelete } from 'react-icons/md';
import { TaskOptionsContainer, Item } from './TaskOptions.style';

const TaskOptions = ({ id, onDelete, onAddImage }) => {
  const onDeleteTask = () => onDelete(id);

  const onAddImageHandler = e => onAddImage(e, id);

  return (
    <TaskOptionsContainer id='optionsContainer'>
      <Item>
        <input
          id='addImageInput'
          type='file'
          accept='image/*'
          onChange={onAddImageHandler}
        />
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
