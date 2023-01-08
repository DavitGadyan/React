import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>Building my first React APP!!! 08.01.2023!!</h1>
      <Row title="NETFLIX" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetachTrending}/>
    </div>
  );
}

export default App;
