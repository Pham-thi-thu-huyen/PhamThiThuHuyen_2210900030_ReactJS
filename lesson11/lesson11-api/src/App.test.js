import { render, screen } from '@testing-library/react';
import PtthApp from './PtthApp';

test('renders learn react link', () => {
  render(<PtthApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
