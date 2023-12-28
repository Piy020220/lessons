import {useState} from 'react';
import './Cart.scss'
import {myFun} from './utils'
import { products } from '../Examples/dataFile';
import {calcFun} from './utils'
const testProducts = [products[0],products[1],products[2],products[3]]
const oleg = myFun(products )
    console.log('pleg',oleg)

const anton = calcFun(products)
console.log('anton',anton)
export const Cart = ({products}) => {
    

    const [showCart, setshowCart] = useState(false);

    const onclickFun = () => {
        setshowCart(true)
    }
    return (
         <div className="cart">
            <button onClick={onclickFun}>Shopping Cart</button>
            {/* { showCart ? <div className="cart-products">cart products</div> : null }*/}
            { showCart && <div className="cart-products">cart products</div> }
         </div>
    )
}
        












//1. написать функцию которая принимает:
 //- обьект state - в котором лежит продукт 
 //- обьект action который может иметь следующие значения: {type: 'UPDATE_SIZE', payload: {size: 'M'}}
 // или {type: 'UPDATE_COLOR', payload: {color: 'black'}} или {type: 'DO_NOTHING'}
//в зависимости от того какой type у обьекта action функция должна возвращать новый обьект копию обьекта state в который добавлять 
//новое поле size либо color; или вернуть обьект state без изменений







 

 