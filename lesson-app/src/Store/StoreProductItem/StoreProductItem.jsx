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
    console.log('isAdded',isAdded);
    
    



    
    if(product.countries) {
        const isProductNotAvailableInCurrentCountry = product.countries.includes(userCountry)
        
        console.log(product.title,' - product.countries:', product.countries, isProductNotAvailableInCurrentCountry)
    }

     validateProduct(product)
     
     
     
     const onclickFun = () => {
        //alert(product.id); 
        setIsAdded(true)
        console.log('12')
    }
    
    const onclickFun2 = () => {
        setIsAdded(false)
        console.log('13')
    }
    



// - 1. после етого возле кнопки "добавить в корзину" допиши кнопку "удалить с корзиньі" и сделать чтоб она убирала
    // из корзиньі

//2. после кнопок "добавить в корзину" и "удалить с корзиньі"
//добавить секцию "Size"  в которой лежат кнопки S, M, L

//3. добавить еще один useState для размера (size)

//4. по нажатию на кнопки изменять размер

//5. добавить css классьі - size-s, size-m, size-l. 
//При добавлении любого из етих класов к тегу img у него должна меняться шириша.
// например 100px, 150px, 200px (потестируй сам и вьібери разніье размерьі)

//6. создать чистую функцию 
//которая будет принимать параметр size и возвращать тебе css клас для тега img в зависимости от єтого размера

//7. сделать так чтоб ета функция вьізьівалась для <img className={вот-тут-вот}    
  
  
    return (<li className= {getLiClass(isAdded)}>
         
        <div><button onClick={onclickFun}>add</button></div> 
        <div><button onClick={onclickFun2}>delete</button></div>        
        <div className ='product-id'> {product.id}</div>
        <div className ='product-title'> {product.title}</div>
        <p className ='product-description'>{product.description}</p>
        <img className='product-thumbnail' src= {product.thumbnail} alt="альтернативный текст" />
    </li>)
}

