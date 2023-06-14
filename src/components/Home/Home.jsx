import './Home.css';
import ShopCont from "../ShopCont/ShopCont";

const Home = () => 
{
  return (
    <>
        <img className="home_top_banner" src={process.env.PUBLIC_URL + "/homeBanners/cork-g2f16d5554_1280.jpg"} alt="" />
        <h2>conozca nuestros productos destacados</h2>
        <div className="shopContenedorGlobal">
          <ShopCont tipoProductos=":simples"></ShopCont>
        </div>
    </>
  );
}

export default Home;
