import ShopCategorias from "../ShopCategorias/ShopCategorias";
import ShopCont from "../ShopCont/ShopCont";
import './Home.css';


const Home = () => {
  return (
    <>
        <img class="home_top_banner" src={process.env.PUBLIC_URL + "/homeBanners/cork-g2f16d5554_1280.jpg"} alt="" />
        <div class="shopContenedorGlobal">
          {/*<ShopCategorias></ShopCategorias>*/}
          <ShopCont tipoProductos="simples"></ShopCont>
        </div>
    </>
    
  );
}

export default Home;
