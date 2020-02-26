import React from 'react';
import TodoPageContainer from './TodoPage.style';
import Header from '../../containers/Header';
import Main from '../../containers/Main';

const TodoPage = () => {
  return (
    <TodoPageContainer>
      <Header />
      <Main />
    </TodoPageContainer>
  );
};

export default TodoPage;
