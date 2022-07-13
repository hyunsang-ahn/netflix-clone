import './App.css';
import Row from './components/Row';
import requests from './components/requests';
function App() {
  return (
    <div className="App">
      <h1>let go build netflix</h1>
      <Row title="넷플릭스 오리자널" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="현재 트랜드" fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
