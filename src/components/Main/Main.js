import React from 'react';
import TodoList from '../../assets/TodoList.svg';
import { MainContainer, Title, Image } from './Main.style';

const Main = () => {
  return (
    <MainContainer>
      <Title>
        <h1>Manage your to do list</h1>
        <h4>Click on checkbox or drag and drop to done</h4>
      </Title>
      <Image src={TodoList} alt='todoList' />
    </MainContainer>
  );
};

export default Main;
