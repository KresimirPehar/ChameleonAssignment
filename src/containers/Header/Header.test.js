import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '.';

it('should show/hide user settings when user icon is clicked', () => {
  const { getByAltText, queryByText } = render(
    <Router>
      <Header />
    </Router>
  );
  fireEvent.click(getByAltText(/avatar/i));
  expect(queryByText(/log out/i)).toBeInTheDocument();
  fireEvent.click(getByAltText(/avatar/i));
  expect(queryByText(/log out/i)).not.toBeInTheDocument();
});
