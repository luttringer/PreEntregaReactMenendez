import "./CartWidget.css"
const CartWidget = (props) => {
    let {nombreP,descP,precioP,imgP} = props;

  return (
    <div class="productoItem">
        <img src={imgP} alt="" />
        <h4>{nombreP}</h4>
        <p>{descP}</p>
        <p>{precioP}</p>
        <button>agregar carrito</button>
    </div>
  );
}

export default CartWidget;
