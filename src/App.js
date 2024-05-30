import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Header from './components/Header' 
import Body from './components/Body';
import PopularChargerSec from './components/PopularChargerSec';
import Advantages from './components/Advantages';
import product from './components/carddata/products';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <PopularChargerSec details = {product}></PopularChargerSec>
      <Advantages></Advantages>
    </div>
  );
}

export default App;
