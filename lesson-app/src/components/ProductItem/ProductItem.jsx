import './ProductItem.css'
export const ProductItem = ({product}) => {
    if(!product.type || !product.model || !product.color) {
        throw 'Vasya, ty sho eblan? sho za product ty mne peredal'
    }
    
    return (
        <li className='product-item'>
            
            <div>{product.model}</div>
            <div>{product.type}</div>
            <div>{product.color}</div>
        </li>

    )
} ,