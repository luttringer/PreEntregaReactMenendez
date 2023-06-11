import "./Carrito.css";
import React, { useContext, useState } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { db } from "../../services/firebase_con";
import { collection, addDoc, updateDoc, where, query, getDocs} from 'firebase/firestore';

const Carrito = () => 
{
    const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');

    const handleNombreChange = e => {setNombre(e.target.value)};

    const handleApellidoChange = e => {setApellido(e.target.value)};

    const handleTelefonoChange = e => {setTelefono(e.target.value)};

    const handleCorreoChange = e => {setCorreo(e.target.value)};

    const handleRealizarCompra = () => 
    {
        agregarOrden(nombre,apellido,telefono,correo,[...carrito]);
    };

    const formularioValido = nombre !== '' && apellido !== '' && telefono !== '' && correo !== '';

    const agregarOrden = async (clienteNombre, clienteApellido, clienteTelefono, clienteCorreo, clienteCompraCadena) => 
    {
        try 
        {
          const ordenRef = collection(db, 'ordenCompra'); // Nombre de la colección en Firestore
          const nuevaOrden = {
            clienteNombre: clienteNombre,
            clienteApellido: clienteApellido,
            clienteCorreo: clienteCorreo,
            clienteTelefono: clienteTelefono,
            clienteCompraCadena: clienteCompraCadena
          };
          await addDoc(ordenRef, nuevaOrden);
          for(const val of [...carrito].values())
          {
            actualizarStock(val.id, val.cantidadSeleccionada);
          }
          vaciarCarrito();
          alert("compra realizada satisfactoriamente");

        } catch (error) 
        {
            alert("se encontro un error en su registro de compra");
        }
    };

    const actualizarStock = async (productoId, cantidad) => {
        try {
          const productosRef = collection(db, 'inventario');
          const q = query(productosRef, where('id', '==', productoId));
          const querySnapshot = await getDocs(q);
      
          if (!querySnapshot.empty) {
            const productoDoc = querySnapshot.docs[0];
            const productoData = productoDoc.data();
            const stockActual = productoData.stock || 0;
            const nuevoStock = stockActual - cantidad;
      
            await updateDoc(productoDoc.ref, { stock: nuevoStock });
            console.log('Stock actualizado correctamente');
          } else {
            console.error('El producto no existe');
          }
        } catch (error) {
          console.error('Error al restar el stock:', error);
        }
      };


    return (
    <div className="contCarrito">
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

                <button className="vaciarCarrito" onClick={vaciarCarrito}>Vaciar carrito</button>
          
                <section className="formularioUsr">
                        <input type="text" placeholder="ingrese su nombre" value={nombre} onChange={handleNombreChange} />
                        <input type="text" placeholder="ingrese su apellido" value={apellido} onChange={handleApellidoChange} />
                        <input type="email" placeholder="ingrese su correo" value={correo} onChange={handleCorreoChange} />
                        <input type="number" placeholder="ingrese su telefono" value={telefono} onChange={handleTelefonoChange}  />

                        <button disabled={!formularioValido} onClick={handleRealizarCompra}>realizar compra</button>
                </section>
          
            </>
        )}
    </div>
  );
};

export default Carrito;
