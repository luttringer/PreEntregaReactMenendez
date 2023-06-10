import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto, cantidad) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      const nuevoCarrito = carrito.map(item => {
        if (item.id === producto.id) {
          return { ...item, cantidad: item.cantidad + cantidad };
        }
        return item;
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter(item => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};