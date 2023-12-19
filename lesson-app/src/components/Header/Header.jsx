import { Link } from "react-router-dom";
import './Header.scss'
import { products } from "../Examples/dataFile";
import { Cart } from "../Cart";

export const Header = () => {
    return (
    
        <div className="header">
            <span>Magaz</span>
            <ul>
                <li><Link to={'/'}>Products</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <Cart/>
                </ul>
        </div>
        )
    }

const calculateTotalPrice = (products) => {
     let kassa = 0;
   console.log('products',products)
    for (let i = 0; i <products.length; i++){
        kassa = products[i].price + kassa;
    }
    return kassa;
}
let price1 = calculateTotalPrice([products[0], products[1]]);

let price2  = calculateTotalPrice([products[2], products[1], products[3]]);



