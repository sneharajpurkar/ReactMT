import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import Product from './components/Product';


function App() {
  return (
    <Routes>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/home/:idDrink' element={<SingleProduct/>}/>
      <Route exact path='/product' element={<Product/>}/>
      
    </Routes>
  );
}

export default App;
