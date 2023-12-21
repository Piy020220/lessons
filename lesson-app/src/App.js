import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { cars, products ,carProducts } from './components/Examples/dataFile';
import { LearningExamples } from './components/learningExamples';
import { StoreProductItem } from './Store/StoreProductItem/StoreProductItem';
import { StoreProductList } from './Store/StoreProductList/StoreProductList';
import ReactDOM from "react-dom/client";
import {About} from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreProductList products={products}  />
  },
  {
    path: "/about",
    element: <About  />
  }
]);

function App() {
 let whatToShow = 'Store';
  if(whatToShow==='Lerning'){
    return (<div> <LearningExamples/> </div>)
  } 

  if(whatToShow==='Store'){
    return <RouterProvider router={router} />;
   }
}
  export default App;

  //подключить реакт роутер в приложение
//тот пакет которьій мьі устанавливали
//там мнструкция есть постарайся разобраться сам

//2. написать функцию которая принимаєт масив продуктов и считает сумарную стоимость
//чето типо такого:
//const calculateTotalPrice = (products) => {
//...
//}

//и потестить на разньіх входньіх данньіх

//let pruce1 = calculateTotalPeice([products[0], products[1]);
//let price2  = calculateTotalPeice([products[2], products[1], products[3]);
