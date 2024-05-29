import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Header from './components/Header' 
import Body from './components/Body';
import PopularChargerSec from './components/PopularChargerSec';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <PopularChargerSec></PopularChargerSec>
    </div>
  );
}

export default App;
