import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';


test('renders header text', async () => {
  render(<App />);
  const linkElement = screen.getByText("Junior");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toBe("H1");
});

test('local storage functions', () => {
  act(() => {
    localStorage.clear();
    localStorage.setItem("category","Gallery")
    localStorage.setItem("ItemNo","0")
  });
  render(<App/>);
  expect(screen.getByText("Gallery View")).toBeInTheDocument();
  
});
