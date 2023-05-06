import './App.css';
import MenuNavegacion from './components/MenuNavegacion/MenuNavegacion';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ShopCategorias from './components/ShopCategorias/ShopCategorias';
import ShopCont from './components/ShopCont/ShopCont';
import Fetch from './components/Fetch/Fetch';

function App() {
  return (
    <>
      <MenuNavegacion/>
      {/*<ItemListContainer greeting="Hoy la historia tiene que ser de unidad"/>*/}
      
      <section class="shopContenedorGlobal">
        <ShopCategorias/>
        <ShopCont/>
      </section>

      <Fetch></Fetch>
    </>
  );
}

export default App;
