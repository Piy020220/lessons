import { ProductItem } from "../ProductItem";
import { ProductList } from "../ProductList";

export const Example = ({oleg}) => {
    const MassName = ['petya','vlad','anton'];
    const MassNumbers = [10,28,35];
    const MassObjects = [
        {
            name : 'oleg',
            lastname : 'niczipirenko'
        },
        {
            name : 'petya',
            lastname : 'szkurateniuk'
        },
        {
            name : 'vlad',
            lastname : 'legun'
        }
        
    ]
  console.log('---------------',oleg)  
return (
    <div className="Example">
        {MassName.map ((item)=> <span key={item}>{item},</span>)}
        {MassNumbers.map ((item) => <span key={item}>-{item * 2}</span>)}
        
        <ProductList>
            {MassObjects}
        </ProductList>
        
        
        
    </div>
)
}
