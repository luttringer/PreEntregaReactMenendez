import './MenuNavegacion.css'

const MenuNavegacion = () => {
  return (
    <header>
        <h1>Luttringer wine shop</h1>
        <i class="fa-solid fa-bars menu_icon"></i>
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>MARKET</li>
                <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </nav>
    </header>
  );
}

export default MenuNavegacion;


