import { ProductList } from '../ProductList'
import './ProductCategory.css'
export const ProductCategory = ({category}) => {
    console.log('============huj= negra ivana=========',category)    
    return(
        <div className="ProductCategory">
         <ProductList products={category.products}
         
         />

      {category.name},{category.type}
        </div>
    )
}
