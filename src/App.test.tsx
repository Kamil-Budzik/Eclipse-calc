import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eclipse calculator/i);
  expect(linkElement).toBeInTheDocument();
});
