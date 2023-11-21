import { ProductItem } from "../ProductItem";
import { ProductList } from "../ProductList";
import {ProductCategory} from '../ProductCategory ';


export const Example = ({}) => {
    
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
 
    const productCategory = {
        name: 'Cars',
        type: 'For Man',
        products: [
          {type:"Fiat", model:"500", color:"white"},
          {type:"toyota", model:"auris", color:"black"},
          {type:"BMW", model:"e34", color:"superblack"},
        ]
      }
      
      const productCategories = [
        {
            name: "Cars",
            type: "For Man",
            products: [
                {
                    type: "Lada",
                    model: "500",
                    color: "white"
                },
                {
                    type: "toyota",
                    model: "auris",
                    color: "black"
                },
                {
                    type: "BMW",
                    model: "e34",
                    color: "superblack"
                }
            ]
        },
        {
            name: "Cars",
            type: "For Pasany",
            products: [
                {
                type: "Fiat",
                model: "500",
                color: "white"
                },
                {
                type: "toyota",
                model: "auris",
                color: "black"
                },
                {
                type: "Petro",
                model: "e34",
                color: "superblack"
                }
            ]
        },
        {
            name: "Shluhy",
            type: "For Mans",
            products: [
                {
                type: "Alena",
                model: "shmara",
                color: "white"
                },
                {
                type: "Alesia",
                model: "domohoziajka",
                color: "black"
                },
                {
                type: "Nastia",
                model: "Dyrka",
                color: "superblack"
                }
            ]
        }
    ]





    
    const hueta = (item) => { 
        console.log(item)
        
        return (
            <span>
                {item.name}-{item.type}
                <ProductCategory category={item} />
            </span>
        )
    }

    return (
        <div className="Example">
            {MassName.map ( (item) => <span key={item}>{item},</span> )}
            {MassNumbers.map ((item) => <span key={item}>-{item * 2},</span>)}
            {MassObjects.map((item) => <span>{item.name}-{item.lastname};SLED MASSIVVVV</span>)}
            {productCategories.map(hueta)}
            
            <ProductCategory category={productCategory} />

        </div>
    )
}