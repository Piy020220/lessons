import logo from './logo.svg';
import './App.css';





function App() {
  return (
    
    <div className="App">
       <div className='demo-container'>
              <div>tekst massivov {aaa}</div><button onClick={onAddClick}>calculate</button>
                </div> 
           
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      
      </div>
      
    
  );
}

export default App;


            let arr = ['ple','joeg','anton','vafledron']
            console.log(arr[1])
            
            let index = 3;
            console.log('dostal po indexu iz peremennoi', arr[index])
            
            for (let i = 0; i <arr.length; i++){

                console.log('pod takim i',i,'vot takaja hujnia',arr[i]);
            }
             
            console.log('=============================')

            let kassa = [11,2,3,4,5]
            let totalKassa = 0;
            for (let i = 0; i <kassa.length; i++){
                console.log(kassa[i])
                 totalKassa = kassa[i] + totalKassa;
                 console.log('total',totalKassa); 
            }
           
            console.log('=============================')

            let aaa = [[1,1],[2,2],[3,3,3,4],[4,4,2,3]]
            
            
            const calculateKassa = (myKassa) => {
               let totPr2 = 0;

                for (let i = 0; i <myKassa.length; i++){
                 totPr2 = myKassa[i] + totPr2;
                 
                }
            return totPr2;
            }
            let kassaD = 0;
            
            const onAddClick = () => {
            for (let i = 0; i < aaa.length; i++){

                kassaD = calculateKassa(aaa[i]) + kassaD;
                console.log(kassaD);
              alert(kassaD)  
              }          

              }

            
           