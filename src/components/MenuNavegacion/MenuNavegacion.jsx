import './MenuNavegacion.css';
import {Link,NavLink} from 'react-router-dom';

const MenuNavegacion = () => 
{
  return (
    <header>
        <Link className="navlink" to="/"><h1>Luttringer wine shop</h1></Link>
        <i className="fa-solid fa-bars menu_icon"></i>
        <nav>
            <ul>
                <li><NavLink className="navlink" to={"/"}>HOME</NavLink></li>
                <li><NavLink className="navlink" to={"/aboutUs"}>ABOUT US</NavLink></li>
                <li><NavLink className="navlink" to={"/market/:completos"}>MARKET</NavLink></li>
                <li><NavLink className="navlink" to={"/"}><i className="fa-solid fa-cart-shopping"></i><div id="counterCarrito">0</div></NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default MenuNavegacion;


