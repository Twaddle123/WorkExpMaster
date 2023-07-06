import React from 'react';

function Dropsort({ sortType, setSortType }) {
  return (
    <span className="dropdown" >
      <select className = "select" name="category" value={sortType} 
              onChange={(event) => setSortType(event.target.value)}>
            <option id="0" >Name (a..z)</option>
            <option id="1" >Name (z..a)</option>
            <option id="2" >Category (a..z)</option>
            <option id="3" >Category (z..a)</option>
            <option id="4" >Price (high..low)</option>
            <option id="5" >Price (low..high)</option>
        </select>
      
    </span>
  );
}

export default Dropsort; 