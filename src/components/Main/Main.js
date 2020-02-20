import React from 'react';
import TodoListImg from '../../assets/TodoList.svg';
import { MainContainer, Title, Image, Lists } from './Main.style';
import List from '../../containers/List';

const Main = () => {
  return (
    <MainContainer>
      <Title>
        <h1>Manage your to do list</h1>
        <h4>Click on checkbox or drag and drop to done</h4>
      </Title>
      <Image src={TodoListImg} alt='todoList' />
      <Lists>
        <List />
        <List />
      </Lists>
    </MainContainer>
  );
};

export default Main;
