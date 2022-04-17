import './App.css';
import Home from "./Components/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './Components/Products';
import Cart from './Components/Cart';
import Saved from './Components/Saved';
import {CartContextProvider} from "./Contexts/CartContext"

function App() {
  
  return (
    <CartContextProvider>
    <Router>
        <div className="App">
          <Routes>
            <Route exact path = "/" element={<Home/>}/> 
            <Route exact path = "/Products" element={<Products/>}/>
            <Route exact path = "/Cart" element={<Cart/>}/>
            <Route exact path = "/Saved" element={<Saved/>}/>
          </Routes>
        </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
