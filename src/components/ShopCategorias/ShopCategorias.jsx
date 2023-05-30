import './ShopCategorias.css';
import {Link} from 'react-router-dom';

const ShopCategorias = () => 
{
  return (
    <div className="shopCatC">
      <h3>filtros de su compra</h3>
      <ul>
        <li><Link className="navlink" to={`/market/:mayor`}>ordenar por mayor precio</Link></li>
        <li><Link className="navlink" to={`/market/:menor`}>ordenar por menor precio</Link></li>
        <li><Link className="navlink" to={`/market/:Cabernet`}>Cabernet</Link></li>
        <li><Link className="navlink" to={`/market/:CabernetSauvignon`}>Cabernet Sauvignon</Link></li>
        <li><Link className="navlink" to={`/market/:Malbec`}>Malbec</Link></li>
        <li><Link className="navlink" to={`/market/:Tannat`}>Tannat</Link></li>
      </ul>
    </div>
  );
}

export default ShopCategorias;
