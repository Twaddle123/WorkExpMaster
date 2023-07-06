import React from 'react';
import DataItem from './DataItem';

function uppercaseFirstLetter(word) {
  return word[0].toUpperCase()+word.substr(1,word.length)
}

function Gallery({setCategory, itemNo, setItemNo, data}) {
  const view = [];
  view.push(<p className = "bigtext">Gallery View</p>)
  for (let i = 0; i < data.length; i++) {
    view.push(<div class = "tooltip">
    <span class="tooltiptext">{ uppercaseFirstLetter(data[i].name)}({data[i].size}) - £{data[i].price.toFixed(2)}</span>
    <img onClick={()=>  { setCategory("Individual"); setItemNo(i)}} class="grid-item" src={`../img/${data[i].pic}`} width="250" height="150">
    </img></div>);
  }
  
  return (<div class="grid-container"> {view} </div>);
}
export default Gallery; 