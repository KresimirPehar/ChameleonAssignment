import React, { useEffect } from 'react';
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
  deleteDoneTasks,
  loadTasks,
  dragAndDropTask,
  addTaskImage
} from '../../redux/actions/todoActions';
import { tasksSelector } from '../../redux/reducers/todoReducer';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const todoTasks = useSelector(tasksSelector('false'));
  const doneTasks = useSelector(tasksSelector('true'));

  const onAddTask = () => dispatch(addTask());
  const onEditTask = (id, newValue) => dispatch(editTask(id, newValue));
  const onDoneUndoneTask = (id, checkStatus) =>
    dispatch(doneUndoneTask(id, checkStatus));
  const onDeleteTask = id => dispatch(deleteTask(id));

  const onAddImage = (e, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => dispatch(addTaskImage(id, reader.result));
    }
  };

  const onDeleteDoneTasks = () => dispatch(deleteDoneTasks());
  const dragAndDropTaskHandler = (taskData, dropTarget) =>
    dispatch(dragAndDropTask(taskData, dropTarget));

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
          dragAndDropTaskHandler={dragAndDropTaskHandler}
          onAddImage={onAddImage}
        />
        <Card
          title='Done'
          Icon={MdDeleteSweep}
          tasks={doneTasks}
          onDoneUndoneTask={onDoneUndoneTask}
          onDeleteDoneTasks={onDeleteDoneTasks}
          dragAndDropTaskHandler={dragAndDropTaskHandler}
        />
      </Lists>
    </MainContainer>
  );
};

export default Main;
