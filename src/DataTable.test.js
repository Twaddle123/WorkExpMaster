import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';
import DataTable from './DataTable';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders item zero from data', () => {

  render(<App/>);
  checkElement("Name: Batteries", "SPAN");
  checkElement("Size: AA", "P");
  checkElement("Department: Batteries", "P");
  checkElement("Price: £10.67", "SPAN");  
  checkElement("Next", "BUTTON");
  checkElement("Previous", "BUTTON");

});

 test('clicking either the next or previous buttons works', async () => {

    render(<App />);

    const button_next = screen.getByText("Next");
    expect(button_next).toBeInTheDocument();
      act(() => {
        button_next.click();
      });
      expect(screen.getByText("Price: £10.67")).toBeInTheDocument();
    
    const button_previous = screen.getByText("Previous");
    expect(button_previous).toBeInTheDocument();
    act(() => {
      button_previous.click();
    });
    expect(screen.getByText("Price: £10.67")).toBeInTheDocument();
  });

  test('clicking either the last or first buttons works', async () => {

    render(<App />);

    const button_last = screen.getByText("Last");
    expect(button_last).toBeInTheDocument();
    act(() => {
      button_last.click();
    });
    expect(screen.getByText("Price: £23.45")).toBeInTheDocument();
    
    const button_first = screen.getByText("First");
    expect(button_first).toBeInTheDocument();
    act(() => {
      button_first.click();
    });
    expect(screen.getByText("Price: £10.67")).toBeInTheDocument();
  });
 

  