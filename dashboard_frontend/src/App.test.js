import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const heading = screen.getByText(/Responsive Dashboard/i);
  expect(heading).toBeInTheDocument();
});
