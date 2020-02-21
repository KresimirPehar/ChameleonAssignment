import React from 'react';
import { MdMoreVert as TaskOptions } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { InputContainer, CheckboxInput, Input } from './Task.style';
import { doneTask } from '../../redux/actions/todoActions';

const Task = ({ value, onEdit, id }) => {
  const dispatch = useDispatch();

  const onChangeHandler = e => onEdit(e.target.value, id);
  const onInputCheck = () => dispatch(doneTask(id));

  return (
    <InputContainer>
      <CheckboxInput type='checkbox' onClick={onInputCheck} />
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
