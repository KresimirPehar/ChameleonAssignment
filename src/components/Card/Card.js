import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';
import Task from '../../containers/Task';

const Card = ({
  title,
  Icon,
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
        <Icon onClick={title === 'To do' ? onAddTask : onDeleteDoneTasks} />
      </Header>
      <Tasks
        id={title === 'To do' ? 'todoCard' : 'doneCard'}
        onDragOver={allowDrop}
        onDrop={onDropHandler}
      >
        {tasks &&
          Object.keys(tasks).map(task => (
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
