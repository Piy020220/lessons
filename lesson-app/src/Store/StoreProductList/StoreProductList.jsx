import {Header} from '../../components/Header'
import React, { useState } from 'react';
import { StoreProductItem } from "../StoreProductItem/StoreProductItem"
import './StoreProductList.scss'


export const StoreProductList = (props) => {

   const {products, userCountry} = props;
    
    console.log('StoreProductList props.Products:', props.products)
    console.log('StoreProductList Products:', products)
    
    const [user, setUser] = useState({ 
      name:'Vlad', 
      surname: 'Legun',
      country:'pl'
    })
    return(
        <><Header/><div> 
          <span className='product-title vladik'>{user.name}</span>, 
          <span className='vladik'>{user.surname}</span>
          
          
          <select defaultValue={user.country} name="Country" id="country" onChange={event => setUser({...user,country: event.target.value})}>
            <option value="belka">belka</option>
            <option value="ua">Ua</option>
            <option value="pl">Pl</option>
          </select>
          <div>Selected country: {user.country}</div>
          
           
           
     </div> 
        <ul className="store-product-list">
          {products.map((product) => <StoreProductItem product={product} userCountry={userCountry} key={product.id}/>)}
       </ul></>
    )
}
      
  
  /*
добавить новый компонет который будет называться StoreProductList который будет принимать параметр products
 в кторый ты передаешь масив продуктов (тот что я тебе создал в новом файле) и рендерить компоненты StoreProductItem


    */
