import { render, screen, fireEvent, act } from '@testing-library/react';
import Dropdown from './Dropdown';



test('dropdown menu', async () => {

  var categories = "Individual"
  const mockFunction = jest.fn()
  render(<Dropdown category={categories} setCategory={mockFunction} />);
  const dropdown = screen.getByTestId('testvar');
  expect(dropdown.value).toBe('Individual');
  act(() => {
    fireEvent.click(dropdown, { target: { value: 'List' } });
  });
  expect(mockFunction).toHaveBeenCalled()
  expect(dropdown.value).toBe('List');
  });

 

  