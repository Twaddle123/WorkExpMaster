import React from 'react';

function uppercaseFirstLetter(word) {
  return word[0].toUpperCase()+word.substr(1,word.length)
}

function Dropfind({ findType, setFindType, data, setItemNo }) {
  const itemNames = new Set();
  for (let i = 0; i < data.length; i++) {
    itemNames.add(data[i].name);
  }
  const ItemNames = Array.from(itemNames);
  const view = [];
  view.push(<option id="0" >All products</option>)
  for (let i = 0; i < ItemNames.length; i++) {
    view.push(<option id={i} >{uppercaseFirstLetter(ItemNames[i])}</option>);
  }
  return (
    <span className="dropdown" >
      <select className = "select" name="category" value={findType}
              onChange={(event) => {setFindType(event.target.value); setItemNo(0)}}>
            {view}
        </select>
      
    </span>
  );
  
}

export default Dropfind; 