import React from 'react';
import DataItem from './DataItem';
function Listview({setCategory, itemNo, setItemNo, data}) {
  const view = [];
  for (let i = 0; i < data.length; i++) {
    view.push(<div key={i}><DataItem productNo = {i}product={data[i]} setCategory = {setCategory} itemNo = {itemNo} setItemNo = {setItemNo}/> </div>);
  }
  return (view);
}
export default Listview; 