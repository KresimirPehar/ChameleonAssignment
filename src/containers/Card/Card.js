import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';
import Task from '../Task';

const Card = ({ title, Icon, onIconClick, tasks }) => {
  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        <Icon onClick={onIconClick} />
      </Header>
      <Tasks>
        {tasks &&
          Object.keys(tasks.byId).map(task => (
            <Task value={tasks.byId[task]} />
          ))}
      </Tasks>
    </CardContainer>
  );
};

export default Card;
