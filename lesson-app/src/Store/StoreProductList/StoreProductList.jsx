import {Header} from '../../components/Header'
import React, { useEffect, useState } from 'react';
import { StoreProductItem } from "../StoreProductItem/StoreProductItem"
import { RenderArrays } from '../../components';
import './StoreProductList.scss'

const PRODUCtS_API_ENDPOINT = "http://localhost:3000/products.json"


export const StoreProductList = ({userCountry}) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
  const mas1 = [2, 3, 4, 5, 6, 4, 77, 32, 4];
  
  const map2 = mas1.map((elw,im) => {
    if(elw < 5){
      return (null)
    }else{return <span>{im}---{elw}<br/></span>}
  })
  
  const getProducts = async () => {
    try { 
    console.log('before fetch call')
    const response = await fetch (PRODUCtS_API_ENDPOINT);
    const responseProducts = await response.json();
    console.log('renResponse',responseProducts)
    setProducts(responseProducts.products ) 
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
            {mas.map((el,i) => <div>{i}---{el}</div>)}

            <br></br>
            {mas1.filter((el) => el > 5).map((el,i) => <div>{i}---{el}</div>)}
          </div> 
          </>
    )
}
      
  
  /*
  1.PRODUCtS_API_ENDPOINT - поломать эту переменную ,задача:сообщить пользователю,
   о том ,что что-то наебнулось текстом "что-то наебнулось",с помощью создания  UseState 
  2.поймать ошибку с помощью catch
  */
