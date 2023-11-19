import { ProductItem } from "../ProductItem";
import { ProductList } from "../ProductList";
import {ProductCategory} from '../ProductCategory ';
import {products, cars} from "./dataFile";
import {cars1,products2} from './dataFile'



export const Fun = () => {
    let totPrice = 0;
      for (let i = 0; i < cars1.length; i++){
        console.log('==================',totPrice)
        totPrice = cars1[i].price  + totPrice;
     }
     alert(totPrice)
     
     let totPrice1 = 0;
     for (let i = 0; i < products2.length; i++){
        console.log('===============',totPrice1)
        totPrice1 = products2[i].price + totPrice1;
    }
     alert(totPrice1);
    
    
  }


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





    //====================
const hueta = (item) => { 
    console.log(item)
return (
<span>{item.name}-{item.type}<ProductCategory category={item} /></span>)
}

//====================
let sumPrice = 0;

return (
    <div className="Example">
        {MassName.map ((item) => <span key={item}>{item},</span>)}
        {MassNumbers.map ((item) => <span key={item}>-{item * 2},</span>)}
        {MassObjects.map((item) => <span>{item.name}-{item.lastname};SLED MASSIVVVV</span>)}
        {productCategories.map(hueta)}
        <div><button onClick={Fun}> calculate sum </button></div>
        
         <ProductCategory category={productCategory} />

    </div>
)
}


/*

let totPrice = 0;
export const Fun = () => {
    for (let i = 0; i < cars1.length; i++){
        totPrice = cars1  + totPrice;
     }
     return alert(totPrice);
    
  }


  <div><button onClick={Fun}> calculate sum </button></div>


 Array.prototype.sum = function (price) {
    var total = 0
    for ( var i = 0, _len = cars1.length; i < _len; i++ ) {
        total = cars1[i][price]
        console.log('oleg nahujjjjjjjjjjjj',total)
    
    }
    return total;
}

  */