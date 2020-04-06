import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';
import Task from '../../containers/Task';
import {
  MdAddBox as AddIcon,
  MdDeleteSweep as DeleteIcon
} from 'react-icons/md';

const Card = ({
  title,
  onAddTask,
  tasks,
  onEditTask,
  onDoneUndoneTask,
  onDeleteTask,
  onDeleteDoneTasks,
  dragAndDropTaskHandler,
  onAddImage
}) => {
  const allowDrop = e => e.preventDefault();

  // on task drop
  const onDropHandler = e => {
    e.preventDefault();
    const dropTarget = e.target.id;
    const taskData = e.dataTransfer.getData('task');
    dragAndDropTaskHandler(JSON.parse(taskData), dropTarget);
  };

  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        <button
          data-testid='cardIcon'
          onClick={title === 'To do' ? onAddTask : onDeleteDoneTasks}
        >
          {title === 'To do' ? <AddIcon /> : <DeleteIcon />}
        </button>
      </Header>
      <Tasks
        id={title === 'To do' ? 'todoCard' : 'doneCard'}
        onDragOver={allowDrop}
        onDrop={onDropHandler}
      >
        {Object.keys(tasks).map(task => (
          <Task
            key={tasks[task].id}
            id={tasks[task].id}
            value={tasks[task]}
            onEdit={onEditTask}
            onDoneUndone={onDoneUndoneTask}
            onDelete={onDeleteTask}
            title={title}
            onAddImage={onAddImage}
          />
        ))}
      </Tasks>
    </CardContainer>
  );
};

export default Card;
