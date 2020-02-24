import React, { useState, useEffect } from 'react';
import { MdMoreVert as TaskOptionsIcon } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { InputContainer, CheckboxInput, Input } from './Task.style';
import { doneTask } from '../../redux/actions/todoActions';
import TaskOptions from '../../components/TaskOptions';

const Task = ({ value, onEdit, id }) => {
  const [isTaskOptions, setIsTaskOptions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeContainer = e => {
      e.stopPropagation();
      // Close task options container when clicked outside of it
      if (isTaskOptions) setIsTaskOptions(false);
    };
    // Listen when the user clicks outside of the task options container
    window.addEventListener('click', closeContainer);
    return () => window.removeEventListener('click', closeContainer);
  }, [isTaskOptions]);

  const onInputCheck = () => dispatch(doneTask(id));
  const onChangeHandler = e => onEdit(e.target.value, id);
  const taskOptionsHandler = e => {
    e.stopPropagation();
    setIsTaskOptions(prevState => !prevState);
  };

  return (
    <InputContainer>
      <CheckboxInput type='checkbox' onClick={onInputCheck} />
      <Input
        type='text'
        defaultValue={value.text}
        onChange={onChangeHandler}
        autoFocus
      />
      <TaskOptionsIcon onClick={taskOptionsHandler} />
      {isTaskOptions && <TaskOptions />}
    </InputContainer>
  );
};

export default Task;
