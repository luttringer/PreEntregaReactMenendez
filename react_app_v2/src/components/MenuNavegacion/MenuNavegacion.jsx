import './MenuNavegacion.css';
import {Link,NavLink} from 'react-router-dom';

const MenuNavegacion = () => {
  return (
    <header>
        <Link class="navlink" to="/"><h1>Luttringer wine shop</h1></Link>
        <i class="fa-solid fa-bars menu_icon"></i>
        <nav>
            <ul>
                <li><NavLink class="navlink" to={"/home"}>HOME</NavLink></li>
                <li><NavLink class="navlink" to={"/aboutUs"}>ABOUT US</NavLink></li>
                <li><NavLink class="navlink" to={"/market"}>MARKET</NavLink></li>
                <li><NavLink class="navlink" to={"/"}><i class="fa-solid fa-cart-shopping"></i><div id="counterCarrito">0</div></NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default MenuNavegacion;


