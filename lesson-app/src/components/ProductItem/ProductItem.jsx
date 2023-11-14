import './ProductItem.css'
export const ProductItem = ({product}) => {
    if(!product.type || !product.model || !product.color) {
        throw 'Vasya, ty sho eblan? sho za product ty mne peredal'
    }
    
    console.log('product:', product)
    console.log('product.type:', product.type)
    console.log('product.model:', product.model)
    console.log('product.color:', product.color)
    return (
        <li className='product-item'>
            
            <div>{product.model}</div>
            <div>{product.type}</div>
            <div>{product.color}</div>
        </li>

    )
}