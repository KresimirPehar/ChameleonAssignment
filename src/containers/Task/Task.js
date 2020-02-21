import React from 'react';
import { InputContainer, CheckboxInput, Input } from './Task.style';

const Task = ({ value, onEdit }) => {
  return (
    <InputContainer>
      <CheckboxInput type='checkbox' />
      <Input
        type='text'
        defaultValue={value.text}
        onChange={onEdit}
        autoFocus
      />
    </InputContainer>
  );
};

export default Task;
