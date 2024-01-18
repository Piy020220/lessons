import { useState } from 'react'
import './StoreProductItem.scss'
import { products } from '../../components/Examples/dataFile' 
import { RenderArrays } from '../../components'
import { object } from '../../components/Examples/dataFile'
import { ProductList } from '../../components/ProductList'


const getLiClass = (isProductAdded) => {
    if(isProductAdded){
        return 'store-product-item added-to-cart'
    }
    else {
        return 'store-product-item'
    }
} 

const getImgClass = (Size) => {
    switch(Size){
        case 'S':
        return 'size-s';

        case 'M':
        return ' size-m'

        case 'L':    
        return 'size-l'

        default:
        return 'size-s';;
        
    }
    }
 
function checkType(param) {
    if(typeof param === 'string') {
        console.log('peredal stroku')
    }

    if(typeof param === 'number') {
        console.log('peredal chislo')
    }

    if(typeof param === 'object') {
        console.log('peredal object')
    }
    
}

function validateProduct (product){
    if(!product.title || !product.description) {
        console.error('вася ты че передал ', product, 'не по понятиям') 
    }
}
     

export const StoreProductItem = ({product, userCountry}) => {

    
    const [isAdded, setIsAdded] = useState(false);
    const [size,setSize] = useState('S')
    
 
    if(product.countries) {
        const isProductNotAvailableInCurrentCountry = product.countries.includes(userCountry)
        
        console.log(product.title,' - product.countries:', product.countries, isProductNotAvailableInCurrentCountry)
    }

     validateProduct(product)
     
     
     
     const onclickAdd = () => {
        setIsAdded(true)
        console.log('12')
    }
    
    const onclickRemove = () => {
        setIsAdded(false)
        console.log('13')
    }
    



// 
  //2 path /component
  
    return (<li className= {getLiClass(isAdded)}>
         <select onChange={event => setSize(event.target.value)}>

            <option value="" disabled selected>size...</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            </select>
        
        <div><button onClick={onclickAdd}>add</button></div> 
        <div><button onClick={onclickRemove}>delete</button></div>        
        <div className ='product-id'> {product.id}</div>
        <div className ='product-title'> {product.title}</div>
        <p className ='product-description'>{product.description}</p>
        <img className={getImgClass(size)}  src= {product.thumbnail} alt="альтернативный текст" />
    </li>)
}

