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
          <ul>
            {carrito.map(producto => (
              <li key={producto.id}>
                {producto.nombre} - Cantidad: {producto.cantidad}{' '}
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
