import React from 'react';
import { MdAddBox, MdDeleteSweep } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TodoListImg from '../../assets/TodoList.svg';
import { MainContainer, Title, Image, Lists } from './Main.style';
import Card from '../../containers/Card';
import {
  addTask,
  editTask,
  deleteTask,
  doneUndoneTask,
  deleteDoneTasks
} from '../../redux/actions/todoActions';
import { tasksSelector } from '../../redux/reducers/todoReducer';

const Main = () => {
  const dispatch = useDispatch();
  const todoTasks = useSelector(tasksSelector('false'));
  const doneTasks = useSelector(tasksSelector('true'));

  const onAddTask = () => dispatch(addTask());
  const onEditTask = (id, newValue) => dispatch(editTask(id, newValue));
  const onDoneUndoneTask = (id, checkStatus) =>
    dispatch(doneUndoneTask(id, checkStatus));
  const onDeleteTask = id => dispatch(deleteTask(id));
  const onDeleteDoneTasks = () => dispatch(deleteDoneTasks());

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
          onAddTask={onAddTask}
          onEditTask={onEditTask}
          onDoneUndoneTask={onDoneUndoneTask}
          onDeleteTask={onDeleteTask}
          tasks={todoTasks}
        />
        <Card
          title='Done'
          Icon={MdDeleteSweep}
          tasks={doneTasks}
          onDoneUndoneTask={onDoneUndoneTask}
          onDeleteDoneTasks={onDeleteDoneTasks}
        />
      </Lists>
    </MainContainer>
  );
};

export default Main;
