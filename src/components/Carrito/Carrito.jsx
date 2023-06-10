import "./Carrito.css";
import React, { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';

const Carrito = () => {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="listaProductos">
            {carrito.map(producto => (
              <li key={producto.id} onClick={() => eliminarProducto(producto.id)}>
                {producto.nombre} <strong>| Precio por unidad:</strong> [{producto.precio}] <strong>| Cantidad Seleccionada:</strong> [{producto.cantidadSeleccionada}] ......  <strong><span>precio total: ${producto.cantidadSeleccionada*producto.precio}</span></strong>
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          
          <section className="formularioUsr">
                <input type="text" placeholder="nombre" />
                <input type="text" placeholder="apellido" />
                <input type="email" placeholder="email" />
                <input type="number" placeholder="telefono" />
          </section>
          <button>realizar compra</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
