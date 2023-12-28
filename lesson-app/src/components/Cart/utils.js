import { products } from "../Examples/dataFile"

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

const returnSize = (product,size) => {
    const productsAddSize = {
        ...product,
           size,
    }
    return productsAddSize;
}
const size = 0;
const productsWithSize = returnSize(products[0],size)


returnSize(products[0],size)
console.log('returnObjectreturnObject',returnSize)

const returnCountries = (product,countries) => {
    const productAddCountry = {
        ...product,
        countries
    }
    return productAddCountry;
}
const countries = 'PL';
const productWithCountry = returnCountries(products[0],countries)

export const switchTestDlyaVlada = (boyName) => {
    switch (boyName){
        case 'Peter' :
            return 'Katya'
        
        case 'Vlad' :
            return  'Lera';
        
        case 'Valera' :
            return 'Ruka';
         
        default: 
         return 'Drochka';
        
    }

    //тут свитч
}
export const switchFun = (state,action) => {
    switch (action.type){
        case  'UPDATE_SIZE':
            const addSize = {
                ...state,
                 size:action.payload.size
            }
           return addSize
            
            
        case  'UPDATE_COLOR' :
            const addColor = {
                ...state,
                color:action.payload.color
            }
            return addColor;

        default : 
            return state;   

    }

    
}
const getSomeProps = (product) => { 
    let tittle = product.title
    let price = product.price
    let description = product.description
    let result = tittle + ' ('+ price +') - ' + description;
    
    return result;
}

export const myFun = (products) => products.map(getSomeProps);
    


const vladikName = 'vladik';
const PetersName = 'PeterE34'
const names = ['anton','vafledron']
const rovnujePasany = [vladikName,PetersName]


export const calcFun = (products) =>  products.map(getSomePrices);

const getSomePrices = (product) => {
    let delivery = 10;
    let discount = 0.8;
    
    if(product.price > 600){
        return product.price * discount + delivery ;
    }
    else{
        return product.price + delivery ;
    }
}





//2. создать функцию которая принимает масив продуктов и возвращает общую цену с доставной, (+10 за каждьій товар)
//3. дописать ету функцию с учетом новогодних скидок, каждьій продукт цена которого вьіше 600 получает скидку 20%