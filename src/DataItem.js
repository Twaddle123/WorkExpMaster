import React from 'react';
import App from './App'

function uppercaseFirstLetter(word) {
     return word[0].toUpperCase()+word.substr(1,word.length)
}

function DataItem({product,setCategory, setItemNo, productNo}) {

  return (
            <div className = "row" onClick={()=>  { setCategory("Individual"); setItemNo(productNo)}}>
               <div className = "column">
                 <img className="product_img" src={`../img/${product.pic}`} alt="product pic" width="250" height="150"/>
               </div>
               <div className = "column">
                 <span>Name: {uppercaseFirstLetter(product.name)}</span>
                 <p>Size: {uppercaseFirstLetter(product.size)}</p>
                 <p>Department: {uppercaseFirstLetter(product.department)}</p>
               </div>
               <div className = "column">
                 <span>Price: £{product.price.toFixed(2)}</span>
               </div>
            </div>
        );
}

export default DataItem;
