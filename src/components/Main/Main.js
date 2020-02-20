import React from 'react';
import { MdAddBox, MdDeleteSweep } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TodoListImg from '../../assets/TodoList.svg';
import { MainContainer, Title, Image, Lists } from './Main.style';
import Card from '../../containers/Card';
import { addNewTodoTask } from '../../redux/actions/todoActions';

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todoTasks);

  const onAddTask = () => dispatch(addNewTodoTask());

  return (
    <MainContainer>
      <Title>
        <h1>Manage your to do list</h1>
        <h4>Click on checkbox or drag and drop to done</h4>
      </Title>
      <Image src={TodoListImg} alt='todoList' />
      <Lists>
        <Card
          title='To do'
          Icon={MdAddBox}
          onIconClick={onAddTask}
          tasks={tasks}
        />
        <Card title='Done' Icon={MdDeleteSweep} />
      </Lists>
    </MainContainer>
  );
};

export default Main;
