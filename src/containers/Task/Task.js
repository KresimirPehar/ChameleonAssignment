import React from 'react';
import { MdMoreVert as TaskOptions } from 'react-icons/md';
import { InputContainer, CheckboxInput, Input } from './Task.style';

const Task = ({ value, onEdit, id }) => {
  const onChangeHandler = e => onEdit(e.target.value, id);

  return (
    <InputContainer>
      <CheckboxInput type='checkbox' />
      <Input
        type='text'
        defaultValue={value.text}
        onChange={onChangeHandler}
        autoFocus
      />
      <TaskOptions />
    </InputContainer>
  );
};

export default Task;
