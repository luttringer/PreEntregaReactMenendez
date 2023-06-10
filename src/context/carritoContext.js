import React, { createContext, useState } from 'react';
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const carritoActual = carrito.find(item => item.id === producto.id);

    if(!carritoActual)
    {
        //no se encontro el producto agregado en el carrito, asi que lo agregamos 
        setCarrito([...carrito, producto]);
        document.querySelector("#counterCarrito").innerHTML=parseInt(document.querySelector("#counterCarrito").innerHTML) + 1;
    }else
    {
        //ya exisate producto en el array carrito
        
        for(const item of carrito.values())
        {
            if(item.id == producto.id)
            {
                item.cantidadSeleccionada += producto.cantidadSeleccionada;
            }
        }
    /*
    if (productoExistente) {
      const nuevoCarrito = carrito.map(item => {
        if (item.id === producto.id) {
          return { ...item, cantidad: item.cantidad + producto.cantidadSeleccionada };
        }
        return item;
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }*/
    }
}

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter(item => item.id !== productoId);
    document.querySelector("#counterCarrito").innerHTML=parseInt(document.querySelector("#counterCarrito").innerHTML) - 1;
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    document.querySelector("#counterCarrito").innerHTML= 0;
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