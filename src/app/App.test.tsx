import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form with next button', () => {
  render(<App />);
  const nextButton = screen.getByText(/next/i);
  expect(nextButton).toBeInTheDocument();
});
