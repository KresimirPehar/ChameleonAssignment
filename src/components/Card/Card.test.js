import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '.';

const setup = () => {
  const tasks = {
    1: { text: 'task1', id: 'task1' },
    2: { text: 'task2', id: 'task2' }
  };
  const { getAllByLabelText } = render(<Card tasks={tasks} />);
  const inputs = getAllByLabelText('task-input');
  return { inputs, tasks };
};

it('should have the same number of task inputs as the number of tasks forwarded to the card', () => {
  const { inputs, tasks } = setup();
  expect(inputs).toHaveLength(Object.keys(tasks).length);
});

it('should contain all provided input tasks', () => {
  const { inputs, tasks } = setup();
  inputs.forEach((input, index) => {
    expect(input.value).toEqual(tasks[index + 1].text);
  });
});

it('should call add task method if card is "To do"', () => {
  const onAddTask = jest.fn();
  const { getByTestId } = render(
    <Card tasks={() => {}} title='To do' onAddTask={onAddTask} />
  );

  userEvent.click(getByTestId('cardIcon'));
  expect(onAddTask).toHaveBeenCalled();
});

it('should call delete tasks method if card is not "To do"', () => {
  const onDeleteDoneTasks = jest.fn();
  const { getByTestId } = render(
    <Card tasks={() => {}} title='Done' onDeleteDoneTasks={onDeleteDoneTasks} />
  );

  userEvent.click(getByTestId('cardIcon'));
  expect(onDeleteDoneTasks).toHaveBeenCalled();
});
