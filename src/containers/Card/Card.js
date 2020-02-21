import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';
import Task from '../Task';

const Card = ({ title, Icon, onIconClick, tasks, onEdit }) => {
  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        <Icon onClick={onIconClick} />
      </Header>
      <Tasks>
        {tasks &&
          Object.keys(tasks.byId).map(task => (
            <Task
              key={tasks.byId[task].id}
              id={tasks.byId[task].id}
              value={tasks.byId[task]}
              onEdit={onEdit}
            />
          ))}
      </Tasks>
    </CardContainer>
  );
};

export default Card;
