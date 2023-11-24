import { StoreProductItem } from "../StoreProductItem/StoreProductItem"
import './StoreProductList.scss'


export const StoreProductList = ({products}) => {
    console.log('StoreProductList Products :', products)
    
    return(
        <ul className="store-product-list">
            {products.map((product) => <StoreProductItem product={product} key={product.id}/>)}
       </ul>
    )
}
      
  
  /*
добавить новый компонет который будет называться StoreProductList который будет принимать параметр products
 в кторый ты передаешь масив продуктов (тот что я тебе создал в новом файле) и рендерить компоненты StoreProductItem


    */
