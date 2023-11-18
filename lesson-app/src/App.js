import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ProductItem,RenderArrays } from './components';
import { ProductList, CoolProductList } from './components/ProductList';
import {ProductCategory} from './components/ProductCategory ';
import { Example } from './components/Examples';


function App() {
  const massivMassivov = [[1,1],[2,2],[3,3,3,4],[4,4,2,3]]
  const product = {type:"Fiat", model:"500", color:"white"}

  

  const products = [
    {type:"Fiat", model:"500", color:"white"},
    {type:"toyota", model:"auris", color:"black"},
    {type:"Petro", model:"e34", color:"superblack"},
  ];
  

 
  
return (
    
     <React.Fragment>
      <h2>
    number arrays
</h2>
 
        <Example 
      />
     
     
     
      <RenderArrays 
          myArray={['ford','lada','bmw','toyota']}
        />
      
  

 

       <RenderArrays 
          myArray={['mraz','lada','nastia','alena']}
      />
      
      {massivMassivov.map((item) => (
          <RenderArrays
          myArray={item}
          />

         ))}

      <ProductItem
         product={product}
      />
   
      <br/>

      
      cool product list = <CoolProductList products={products} />
      <br/>
      <ProductList products={products} />
      
       <br />
      ------+---
      {products.map((item) => (
        
        <ProductItem
          product={item}
      />
     
      
  ))}
      ------+---
      


       <div className='demo-container'>

                </div> 
    
    <div className="App">
           
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      
      </div>
      </React.Fragment>
    
  );
}

export default App;
