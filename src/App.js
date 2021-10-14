import DataFetching from './DataFetching';
import './App.css';


function App() {

const api1="https://newsapi.org/v2/everything?q=apple&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=2eef8ae39878472798e22a1548e75ac0";
const api2="https://newsapi.org/v2/everything?q=tesla&from=2021-09-14&sortBy=publishedAt&apiKey=2eef8ae39878472798e22a1548e75ac0";
const api3="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2eef8ae39878472798e22a1548e75ac0";
  
return (
    <div className="App">
      <DataFetching api1={api1} api2={api2} api3={api3}/>
      
    </div>
  );
}

export default App;
