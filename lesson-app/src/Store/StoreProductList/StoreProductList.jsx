import {Header} from '../../components/Header'
import React, { useEffect, useState } from 'react';
import { StoreProductItem } from "../StoreProductItem/StoreProductItem"

import './StoreProductList.scss'

const PRODUCtS_API_ENDPOINT = "http://localhost:3000/products.json"


export const StoreProductList = ({userCountry}) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const getProducts =  () => {
  try { 
    console.log('before fetch call')
    fetch("http://localhost:3000/111products.json").then(response => {
      return response.json();
    }
    
    ).then(
      
      productuEbanyje => {
        console.log(productuEbanyje,'ebal promisy')
        setProducts(productuEbanyje.products)
        console.log('AFTER FETCH', productuEbanyje)
      })
      .catch(err => console.log('dalbajob'))
      setError(true)
       console.log('after fetch call')
  }catch(err) {
    setError(true)
  }
}
 
  useEffect(() => {
    console.log('before function call')
    getProducts()
    console.log('after function call')
    },[])

    
    console.log('COMPONENT USESTATE Products:', products)
    
    const [user, setUser] = useState({ 
      name:'Vlad', 
      surname: 'Legun',
      country:'pl'
    })
    
    const renderProducts = () =>{
      if(error){
        return (
          <div className='products-loading'>ошибка брат,отдохни пока</div>
        )
      }
      if(products == null){
        return (
        <div className='products-loading'>идет загрузка продуктов...</div>
        )
      }
      return( 
      <ul 
      className="store-product-list">
      {products?.map((product) => <StoreProductItem product={product} userCountry={userCountry} key={product.id}/>)}
      </ul>
      )
    }

    return (
        <>
          <Header/>
          <div> 
            <span className='product-title vladik'>{user.name}</span>, 
            <span className='vladik'>{user.surname}</span>
            
            
            <select defaultValue={user.country} name="Country" id="country" onChange={event => setUser({...user,country: event.target.value})}>
              <option value="belka">belka</option>
              <option value="ua">Ua</option>
              <option value="pl">Pl</option>
            </select>
            <div>Selected country: {user.country}</div>
            {renderProducts()}
          </div> 
          </>
    )
}
      
  
  /*
  1.PRODUCtS_API_ENDPOINT - поломать эту переменную ,задача:сообщить пользователю,
   о том ,что что-то наебнулось текстом "что-то наебнулось",с помощью создания  UseState 
  2.поймать ошибку с помощью catch
  */
