import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';

const Card = ({ Icon, todoList }) => {
  return (
    <CardContainer>
      <Header>
        <Title>{todoList ? 'To do' : 'Done'}</Title>
        <Icon />
      </Header>
      <Tasks />
    </CardContainer>
  );
};

export default Card;
