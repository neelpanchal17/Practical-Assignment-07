import { render, screen } from '@testing-library/react';
import CartApp from './App';

test('renders learn react link', () => {
  render(<CartApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
