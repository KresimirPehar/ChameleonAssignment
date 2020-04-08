import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '.';

it('should show/hide password when icon is clicked', () => {
  const { getByLabelText } = render(
    <Router>
      <LoginForm />
    </Router>
  );
  const input = getByLabelText('Password input');
  expect(input).toHaveAttribute('type', 'password');
  fireEvent.click(getByLabelText('Show password'));
  expect(input).toHaveAttribute('type', 'text');
  fireEvent.click(getByLabelText('Show password'));
  expect(input).toHaveAttribute('type', 'password');
});
