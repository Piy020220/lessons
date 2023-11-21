import {products, cars} from "../Examples/dataFile";

export const calculateSum = (kassaArray) => {
    let kassa = 0;

    for (let i = 0; i < kassaArray.length; i++){
        kassa = kassaArray[i].price  + kassa;
    }
    
    alert(kassa)
}

export const showPrices = () => {
    let sumCars = calculateSum(cars) ;
    let sumProductc = calculateSum(products);
}
 