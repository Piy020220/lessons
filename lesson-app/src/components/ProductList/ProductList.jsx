import { ProductItem } from "../ProductItem"

export const ProductList = ({products}) =>{

    
 
    const mappingFun = (item) => {
        return (
            <ProductItem
                product={item}
            />
        )
    }


    return (
        <div className="RenderProducts">          
          {products.map(mappingFun)}   
        </div>  
    )
}

export const CoolProductList = ({products}) =>{
    return (
        <div className="RenderProducts">          
            {products.map( (item) => (
                <ProductItem
                    product={item}
                />
        ))}   
        </div>  
    )
} 
