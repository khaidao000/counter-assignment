import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders initial count', () => {
  // This test checks if the initial count (0) is rendered
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // This simulates a click on the "+" button and checks if the count increments
  fireEvent.click(screen.getByText('+'));
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('+')); // Increment to 1
  fireEvent.click(screen.getByText('-')); // Decrement back to 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent("0");
});
