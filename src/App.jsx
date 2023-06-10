import './App.css';
import MenuNavegacion from './components/MenuNavegacion/MenuNavegacion';
import Home from './components/Home/Home';
import Market from './components/Market/Market';
import AboutUs from './components/AboutUs/AboutUs';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import { CarritoProvider } from './context/carritoContext.js';

function App() 
{
  return (
    <>
    <CarritoProvider>
      <BrowserRouter>
        <MenuNavegacion/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/market/:idShowCategory' element={<Market/>}/>
          <Route path='/itemDetail/:idItem' element={<ItemDetail/>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>   
    </CarritoProvider>
    </>
  );
}

export default App;
