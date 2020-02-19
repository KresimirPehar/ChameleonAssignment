import React from 'react';
import TodoPageContainer from './TodoPage.style';
import Header from '../Header';
import Main from '../Main';

const TodoPage = () => {
  return (
    <TodoPageContainer>
      <Header />
      <Main />
    </TodoPageContainer>
  );
};

export default TodoPage;
