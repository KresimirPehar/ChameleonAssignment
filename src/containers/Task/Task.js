import React, { useState, useEffect, memo } from 'react';
import { MdMoreVert as TaskOptionsIcon } from 'react-icons/md';
import { InputContainer, CheckboxInput, Input, Image } from './Task.style';
import TaskOptions from '../../components/TaskOptions';

const Task = memo(
  ({ value, onEdit, onDoneUndone, id, title, onDelete, onAddImage }) => {
    const [isTaskOptions, setIsTaskOptions] = useState(false);

    useEffect(() => {
      const closeContainer = e => {
        e.stopPropagation();
        // Close task options container when clicked outside of it
        if (
          isTaskOptions &&
          e.target.id !== ('optionsContainer' && 'addImageInput')
        )
          setIsTaskOptions(false);
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

    // on task drag start
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
          aria-label='task-input'
          defaultValue={value.text}
          onChange={onEditHandler}
          autoFocus
          disabled={title === 'Done'}
        />
        {title === 'To do' && (
          <TaskOptionsIcon
            onClick={taskOptionsHandler}
            data-testid='optionsIcon'
          />
        )}
        {value.imageData && <Image src={value.imageData} />}
        {isTaskOptions && (
          <TaskOptions
            id={id}
            onDelete={onDelete}
            onAddImage={onAddImage}
            setIsTaskOptions={setIsTaskOptions}
          />
        )}
      </InputContainer>
    );
  }
);

export default Task;
