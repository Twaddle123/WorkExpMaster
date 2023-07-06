import React, { useState, act } from 'react';
import DataItem from './DataItem';

function DataTable({setCategory, category, itemNo, setItemNo, data}) {


  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
    setItemNo(itemNo+1); 
    }
  }

  function previousPage()
  {
    if (itemNo - 1 > -1)
    {
      setItemNo(itemNo-1);
    }
  }

  return (<div>
            <DataItem product={data[itemNo]} setCategory = {setCategory} category ={category} productNo = {itemNo} setItemNo = {setItemNo}/>
            <button onClick={() => setItemNo(0)}>First</button>
            <button onClick={() => previousPage()}>Previous</button>
            <button onClick={() => nextPage()}>Next</button>
            <button onClick={() => setItemNo(data.length-1)}>Last</button>
            <p>{itemNo+1}</p>
          </div>);
}

export default DataTable; 