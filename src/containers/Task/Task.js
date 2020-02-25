import React, { useState, useEffect } from 'react';
import { MdMoreVert as TaskOptionsIcon } from 'react-icons/md';
import { InputContainer, CheckboxInput, Input } from './Task.style';
import TaskOptions from '../../components/TaskOptions';

const Task = ({ value, onEdit, onDoneUndone, id, title, onDelete }) => {
  const [isTaskOptions, setIsTaskOptions] = useState(false);

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

  const taskOptionsHandler = e => {
    e.stopPropagation();
    setIsTaskOptions(prevState => !prevState);
  };

  const onDoneUndoneHandler = e =>
    onDoneUndone(id, e.target.checked.toString());

  const onEditHandler = e => onEdit(id, e.target.value);

  const onDragStartHandler = e => {
    const taskData = {
      card: e.target.id,
      ...value
    };
    e.dataTransfer.setData('task', JSON.stringify(taskData));
  };

  return (
    <InputContainer
      id={title === 'To do' ? 'todoCard' : 'doneCard'}
      onDragStart={onDragStartHandler}
      draggable
    >
      <CheckboxInput
        type='checkbox'
        onClick={onDoneUndoneHandler}
        defaultChecked={title === 'Done'}
      />
      <Input
        type='text'
        defaultValue={value.text}
        onChange={onEditHandler}
        autoFocus
        disabled={title === 'Done'}
      />
      {title === 'To do' && <TaskOptionsIcon onClick={taskOptionsHandler} />}
      {isTaskOptions && <TaskOptions id={id} onDelete={onDelete} />}
    </InputContainer>
  );
};

export default Task;
