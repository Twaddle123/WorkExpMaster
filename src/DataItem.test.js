import { render, screen } from '@testing-library/react';
import DataItem from './DataItem';
import App from './App';

function checkElement(theText, theTag)
{
    const linkElement = screen.getByText(theText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe(theTag);
}

test('renders data', () => {

  var data = { "name": "hammer",      "pic": "hammer_medium.jpg",      "size": "medium", "department": "tools", "price": 12.50};

  render(<DataItem product={data}/>);
  checkElement("Name: Hammer", "SPAN");
  checkElement("Size: Medium", "P");
  checkElement("Department: Tools", "P");
  checkElement("Price: £12.50", "SPAN"); 

});
