import React from 'react';
import TodoPageContainer from './TodoPage.style';
import Header from '../../components/Header';
import Main from '../../components/Main';

const TodoPage = () => {
  return (
    <TodoPageContainer>
      <Header />
      <Main />
    </TodoPageContainer>
  );
};

export default TodoPage;
