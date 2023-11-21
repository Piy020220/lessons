import logo from './logo.svg';
import './App.css';
import React from 'react';
import { products } from './components/Examples/dataFile';
import { LearningExamples } from './components/learningExamples';
import { StoreProductItem } from './Store/StoreProductItem/StoreProductItem';
import { StoreProductList } from './Store/StoreProductList/StoreProductList';

function App() {

  let whatToShow = 'Store';

  if(whatToShow==='Lerning'){
  return (<div> <LearningExamples/> </div>)
  } 
  if(whatToShow==='Store'){
    return (<div> 
      
      <StoreProductList products={products}/> 
      
    
     </div>) 
  }
  
}

/*
   добавить новый компонет который будет называться StoreProductList который будет принимать параметр products
 в кторый ты передаешь масив продуктов (тот что я тебе создал в новом файле) и рендерить компоненты StoreProductItem
 */




export default App; 
