import { ProductItem } from "../ProductItem"

export const ProductList = ({products}) =>{

    console.log('vladdik pi`dy choczet',products)
 
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

    console.log('vladdik pi`dy choczet',products)

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