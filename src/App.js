import Dropsort from './Dropsort';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import Dropdown from './Dropdown.js'
import Dropfind from './Dropfind.js'
import React, { useState , useEffect} from 'react';
import Listview from './Listview.js';
import Gallery from './Gallery.js';
import data from './data.json';

function uppercaseFirstLetter(word) {
  return word[0].toUpperCase()+word.substr(1,word.length)
}

function App() {
  const [findType, setFindType] = useState(localStorage.getItem("findType"));
  const [category, setCategory] = React.useState(localStorage.getItem("category"));
  const [itemNo, setItemNo] = useState(parseInt(localStorage.getItem("itemNo")));
  const [sortType, setSortType] = useState(localStorage.getItem("sortType"));
  useEffect(() => {
    if (category == null) setCategory("Individual");
    if (sortType == null) setSortType("Name (a..z)");
    if (findType == null) setFindType("All products");
    if (isNaN(itemNo)) setItemNo(0);
    localStorage.setItem("category", category)
    localStorage.setItem("itemNo", itemNo)
    localStorage.setItem("sortType", sortType)
    localStorage.setItem("findType", findType)
  }, [category, itemNo, sortType, findType]);

  let usedData = data;
  if (!(findType === "All products")) {
    usedData = [];
    for (let i = 0; i < data.length; i++) {
      if (uppercaseFirstLetter(data[i].name) == findType) {
        console.log(findType)
        usedData.push(data[i]);
      }
    }
  }



  if (sortType === "Name (z..a)") {
    usedData.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sortType === "Name (a..z)") {
    usedData.sort((b, a) => b.name.localeCompare(a.name))
  } else if (sortType === "Category (a..z)") {
    usedData.sort((a, b) => b.department.localeCompare(a.department))
  } else if (sortType === "Category (z..a)") {
    usedData.sort((b, a) => b.department.localeCompare(a.department))
  } else if (sortType === "Price (low..high)") {
    usedData.sort((a, b) => a.price - b.price)
  } else if (sortType === "Price (high..low)") {
    usedData.sort((b, a) => a.price - b.price)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />Junior
        <div id = "elementright">
          <Dropdown category={category} setCategory={setCategory} class = "sticky"/>
          <Dropsort sortType={sortType} setSortType={setSortType} class = "sticky"/>
          <Dropfind findType={findType} setFindType={setFindType} class = "sticky" data={data} setItemNo={setItemNo} />
        </div></h1>
        {category == "Individual" ? <DataTable category={category} setCategory={setCategory} itemNo={itemNo} setItemNo={setItemNo} data={usedData} /> : null}
        {category == "List" ? <Listview setCategory={setCategory} itemNo={itemNo} setItemNo={setItemNo} data={usedData} /> : null}
        {category == "Gallery" ? <Gallery setCategory={setCategory} setItemNo={setItemNo} data={usedData} /> : null}
      </header>
    </div>
  );
}


export default App;
