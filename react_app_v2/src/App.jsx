import './App.css';
import MenuNavegacion from './components/MenuNavegacion/MenuNavegacion';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ShopCategorias from './components/ShopCategorias/ShopCategorias';
import ShopCont from './components/ShopCont/ShopCont';
import Home from './components/Home/Home';
import Market from './components/Market/Market';
import AboutUs from './components/AboutUs/AboutUs';
import Fetch from './components/Fetch/Fetch';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNavegacion/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/market' element={<Market/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
