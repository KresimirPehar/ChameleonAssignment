import React from 'react';
import { TasksContainer, Title, Header } from './List.style';

const List = ({ Icon }) => {
  return (
    <TasksContainer>
      <Header>
        <Title>Todo</Title>
        <Icon />
      </Header>
    </TasksContainer>
  );
};

export default List;
