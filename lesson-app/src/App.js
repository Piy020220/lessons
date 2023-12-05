import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { cars, products ,carProducts } from './components/Examples/dataFile';
import { LearningExamples } from './components/learningExamples';
import { StoreProductItem } from './Store/StoreProductItem/StoreProductItem';
import { StoreProductList } from './Store/StoreProductList/StoreProductList';
import ReactDOM from "react-dom/client";

function myFun (number) {
  return 
}
let result = myFun(2)

function App() {

  const [user, setUser] = useState({ 
    name:'Vlad', 
    surname: 'Legun',
    country:'pl'
  })

  let whatToShow = 'Store';

  if(whatToShow==='Lerning'){
      return (<div> <LearningExamples/> </div>)
  } 
  
  if(whatToShow==='Store'){
   
   
   return (<div> 
      <span className='product-title vladik'>{user.name}</span>, 
      <span className='vladik'>{user.surname}</span>
      
      
      <select defaultValue={user.country} name="Country" id="country" onChange={event => setUser({...user,country: event.target.value})}>
        <option value="belka">belka</option>
        <option value="ua">Ua</option>
        <option value="pl">Pl</option>
      </select>
      <div>Selected country: {user.country}</div>
      
       <StoreProductList products={products} userCountry={user.country} /> 
       
 </div>) 
  }
}
  



/*
   добавить новый компонет который будет называться StoreProductList который будет принимать параметр products
 в кторый ты передаешь масив продуктов (тот что я тебе создал в новом файле) и рендерить компоненты StoreProductItem
 */




export default App;
