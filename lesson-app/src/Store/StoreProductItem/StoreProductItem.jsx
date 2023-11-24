import './StoreProductItem.scss'
   
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
const myObject =  {title : 1}



export const StoreProductItem = ({product}) => {
    let valet = validateProduct(product)
     
     return (<li className='store-product-item'>

        <span className ='product-title vladik '> {product.title}</span>
        <p className ='product-description'>     {product.description}</p>
        <img className='product-thumbnail' src= {product.thumbnail} alt="альтернативный текст" />
    </li>)
}

