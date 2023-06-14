import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    }
}

  const eliminarProducto = (productoId) => 
  {
    const nuevoCarrito = carrito.filter(item => item.id !== productoId);
    if(parseInt(document.querySelector("#counterCarrito").innerHTML>0))
    {
      document.querySelector("#counterCarrito").innerHTML=parseInt(document.querySelector("#counterCarrito").innerHTML) - 1;
    }
    
    toast("Producto eliminado correctamente.");
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => 
  {
    setCarrito([]);
    document.querySelector("#counterCarrito").innerHTML= 0;
    toast("Carrito vaciado correctamente.");
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