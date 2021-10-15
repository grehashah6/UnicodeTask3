import DataFetching from './DataFetching';
import './App.css';


function App() {


const api1='https://saurav.tech/NewsAPI/top-headlines/category/health/in.json' 
// const api2="https://newsapi.org/v2/everything?q=tesla&from=2021-09-14&sortBy=publishedAt&apiKey=2eef8ae39878472798e22a1548e75ac0";
// const api3="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2eef8ae39878472798e22a1548e75ac0";
  
return (
    <div className="App">
  <center><u><h1 >INFORMATION PALETTE</h1></u></center> <br></br>

      <DataFetching api1={api1} />
      
    </div>
  );
}

export default App;
