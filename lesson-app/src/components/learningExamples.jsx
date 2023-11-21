
import React from 'react';
import { ProductItem,RenderArrays } from './index';
import { ProductList, CoolProductList } from './ProductList';
import {ProductCategory} from './ProductCategory ';
import { Example } from './Examples';


export const LearningExamples = () => {
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
 
      <Example />
      <RenderArrays myArray={['ford','lada','bmw','toyota']} />
      <RenderArrays myArray={['mraz','lada','nastia','alena']} />
      
      {massivMassivov.map((item) => (<RenderArrays myArray={item} />))}

      <br/>
      cool product list = <CoolProductList products={products} />
      <br/>
      <ProductList products={products} />
      
       <br />
       <ProductItem product={product} />
       <br />
      {products.map((item) => (<ProductItem product={item} /> ))}
      
      


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


