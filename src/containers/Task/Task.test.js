import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Task from '.';

it('should call edit method on task input change', () => {
  const value = { text: 'testValue' };
  const onEdit = jest.fn();
  const { getByLabelText } = render(<Task value={value} onEdit={onEdit} />);
  const input = getByLabelText('task-input');
  userEvent.type(input, 'newValue');

  expect(onEdit).toHaveBeenCalled();
  expect(input.value).toBe('newValue');
});

it('should have enabled input if card is "To do"', () => {
  const { getByLabelText } = render(
    <Task title='To do' value={{ text: '' }} />
  );
  expect(getByLabelText('task-input')).toBeEnabled();
});

it('should have disabled input if card is "Done"', () => {
  const { getByLabelText } = render(<Task title='Done' value={{ text: '' }} />);
  expect(getByLabelText('task-input')).toBeDisabled();
});

it('should have task options if card is "To do"', () => {
  const { getByTestId } = render(<Task title='To do' value={{ text: '' }} />);
  expect(getByTestId('optionsIcon')).toBeInTheDocument();
});

it('should not have task options if card is "Done"', () => {
  const { queryByTestId } = render(<Task title='Done' value={{ text: '' }} />);
  expect(queryByTestId('optionsIcon')).not.toBeInTheDocument();
});

it('should display task options modal when options icon is clicked', () => {
  const { getByTestId, getByText } = render(
    <Task title='To do' value={{ text: '' }} />
  );
  userEvent.click(getByTestId('optionsIcon'));
  expect(getByText(/delete/i)).toBeInTheDocument();
  expect(getByText(/image/i)).toBeInTheDocument();
});

it('should close task options modal when clicked outside of it', () => {
  const { getByTestId, getByText, queryByText } = render(
    <Task title='To do' value={{ text: '' }} />
  );
  fireEvent.click(getByTestId('optionsIcon'));
  expect(getByText(/delete/i)).toBeInTheDocument();
  expect(getByText(/image/i)).toBeInTheDocument();

  fireEvent.click(window);
  expect(queryByText(/delete/i)).not.toBeInTheDocument();
  expect(queryByText(/image/i)).not.toBeInTheDocument();
});
