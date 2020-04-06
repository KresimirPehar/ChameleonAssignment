import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoListImg from '../../assets/TodoList.svg';
import { MainContainer, Title, Image, Lists } from './Main.style';
import Card from '../../components/Card';
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

  const onAddTask = useCallback(() => dispatch(addTask()), [dispatch]);

  const onEditTask = useCallback(
    (id, newValue) => dispatch(editTask(id, newValue)),
    [dispatch]
  );
  const onDoneUndoneTask = useCallback(
    (id, checkStatus) => dispatch(doneUndoneTask(id, checkStatus)),
    [dispatch]
  );
  const onDeleteTask = useCallback(id => dispatch(deleteTask(id)), [dispatch]);

  const onAddImage = useCallback(
    (e, id) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        // read uploaded image
        reader.readAsDataURL(file);
        reader.onload = () => dispatch(addTaskImage(id, reader.result));
      }
    },
    [dispatch]
  );

  const onDeleteDoneTasks = useCallback(() => dispatch(deleteDoneTasks()), [
    dispatch
  ]);

  const dragAndDropTaskHandler = useCallback(
    (taskData, dropTarget) => dispatch(dragAndDropTask(taskData, dropTarget)),
    [dispatch]
  );

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
