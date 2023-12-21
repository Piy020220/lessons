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
