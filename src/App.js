import './App.css';
import DataFetching from './DataFetching';


function App() {

const api1="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1887c59ea59f4502b3fe5d0357bb5a51";
const api2="https://newsapi.org/v2/everything?q=apple&from=2021-10-09&to=2021-10-09&sortBy=popularity&apiKey=1887c59ea59f4502b3fe5d0357bb5a51";
const api3="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1887c59ea59f4502b3fe5d0357bb5a51";
  
return (
    <div className="App">
      <DataFetching api1={api1} api2={api2} api3={api3}/>
      

      
      
    </div>
  );
}

export default App;
