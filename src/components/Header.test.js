import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render header component', () => {
  render(<Header />);
  const element = screen.getByText(/NewsOnline/i);
  expect(element).toBeInTheDocument();
});
