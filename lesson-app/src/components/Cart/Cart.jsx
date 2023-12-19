import {useState} from 'react';
import './Cart.scss'
import { products } from '../Examples/dataFile';
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
        
const idArray = ['32','45','55']

const AddId = (idArray,id) => {
const newArray = [...idArray,id]
}
const newArr =  AddId(['32','45','55'], '3')

const idArray2 = ['32','45','55','3']

/**
 * 
 * @param {Array} idArray2 масив из которого надо удолить елемент
 * @param {string} id елемент который надо удолить
 */

const remoweId = (idArray, id) => {
const filteredNumbers = idArray.filter( (number) => number !== id)
return filteredNumbers
}

const newArray = remoweId(idArray2,'3')


const sortByPrice = (products) => {
    const sortedPrices = products.sort((a, b) => a.price - b.price)
    return sortedPrices;
}
    

const sortByTittle = (products) => {
    const sortedTittles = products.sort((a, b) => a.tittle - b.tittle)
    return sortedTittles;     
}
    
const sortPrices = (products) => {
    const filterPrices = products.filter (function(el) {
        return el.price < 600;
    })
    return filterPrices;
}

const remoweProducts = (products) => {
    const [productFirst,productSecon,...ostalnyje] = products;
    return ostalnyje;
}

const returnObject = (product,size) => {
    const productsWithSize = {...product,size}
    return productsWithSize;
}
const size = 0;
const productsWithSize = returnObject(products[0],size)

returnObject(products[0],size)
console.log('returnObjectreturnObject',returnObject)

         //задания:
         //1. создать функцию которая принимает масив продуктов и возвращает такой же масив отсортированьій по цене
         //2. создать функцию которая принимает масив продуктов и возвращает такой же масив отсортированьій по имени
         //3. создать функцию которая принимает масив продуктов и возвращает такой же масив но без продуктов у которьіх 
         //цена вьіше 600
         //4. создать функцию которая принимает масив продуктов и возвращает такой же масив но без первьіх двух продуктов
         //5. создать функцию которая принимает (1. продукт, 2. поле size), и возвращает обьект етого продукта с новьім полем
         //6. создать функцию которая принимает (1. продукт, 2. поле countries), и возвращает обьект етого продукта 
        //с новьім полем





 

 