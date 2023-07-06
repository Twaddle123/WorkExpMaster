import React from 'react';

function Dropdown({ category, setCategory }) {

  return (
    <span className="dropdown" >
      <select name="category" value={category}  data-testid="testvar"
              onChange={(event) => setCategory(event.target.value)}>
            <option id="Individual" >Individual</option>
            <option id="List" >List</option>
            <option id="Gallery" >Gallery</option>
        </select>
      
    </span>
  );
}

export default Dropdown; 