import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ProductItem,RenderArrays } from './components';
import { ProductList, CoolProductList } from './components/ProductList';
import {ProductCategory} from './components/ProductCategory ';
import { Example } from './components/Examples';


/**
 * написать функционал для этого -
 <ProductCategory 
        category={productCategory}
        import {ProductCategory} from './components/ProductCategory'
        export {ProductCategory} from './ProductCategory'
      />

       />
      
 */
function App() {
  const massivMassivov = [[1,1],[2,2],[3,3,3,4],[4,4,2,3]]
  const product = {type:"Fiat", model:"500", color:"white"}

  

  const products = [
    {type:"Fiat", model:"500", color:"white"},
    {type:"toyota", model:"auris", color:"black"},
    {type:"Petro", model:"e34", color:"superblack"},
  ];

  const productCategory = {
    name: 'Cars',
    type: 'For Man',
    products: [
      {type:"Fiat", model:"500", color:"white"},
      {type:"toyota", model:"auris", color:"black"},
      {type:"BMW", model:"e34", color:"superblack"},
    ]
  }
  
  const productCategories = [[
    {type:"Alena", model:"shmara", color:"white"},
    {type:"Alesia", model:"domohoziajka", color:"black"},
    {type:"Nastia", model:"Dyrka", color:"superblack"},
  ],
  [
    {type:"Fiat", model:"500", color:"white"},
    {type:"toyota", model:"auris", color:"black"},
    {type:"Petro", model:"e34", color:"superblack"},
  ],
  [
    {type:"Fiat", model:"500", color:"white"},
    {type:"toyota", model:"auris", color:"black"},
    {type:"Petro", model:"e34", color:"superblack"},
  ]]
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
      
      
        

      <ProductCategory 
         category={productCategory}
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
              <div>tekst massivov {aaa}</div><button onClick={onAddClick}>calculate</button>
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

const aaa = [[1,1],[2,2],[3,3,3,4],[4,4,2,3]]
            let arr = ['ple','joeg','anton','vafledron']
            console.log(arr[1])
            
            let index = 3;
            console.log('dostal po indexu iz peremennoi', arr[index])
            
            for (let i = 0; i <arr.length; i++){

                console.log('pod takim i',i,'vot takaja hujnia',arr[i]);
            }
             
            console.log('=============================')

            let kassa = [11,2,3,4,5]
            let totalKassa = 0;
            for (let i = 0; i <kassa.length; i++){
                console.log(kassa[i])
                 totalKassa = kassa[i] + totalKassa;
                 console.log('total',totalKassa); 
            }
           
            console.log('=============================')

            
            
            
            const calculateKassa = (myKassa) => {
               let totPr2 = 0;

                for (let i = 0; i <myKassa.length; i++){
                 totPr2 = myKassa[i] + totPr2;
                 
                }
            return totPr2;
            }
            let kassaD = 0;
            
            const onAddClick = () => {
            for (let i = 0; i < aaa.length; i++){

                kassaD = calculateKassa(aaa[i]) + kassaD;
                console.log(kassaD);
               
              
            }
            alert(kassaD);
                      
                      }