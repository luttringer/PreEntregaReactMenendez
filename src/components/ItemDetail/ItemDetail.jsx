import "./ItemDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../services/firebase_con";

const ItemDetail = () => 
{
  const id = useParams();
  const id_item = parseInt(id.idItem);
  const [producto, setProducto] = useState(null);


  async function fetchMultipleDocuments() 
  {
    const collectionRef = collection(db, 'inventario');
    const q = query(collectionRef, where('id', '==', id_item));
    
    try 
    {
      const querySnapshot = await getDocs(q);
      let productos = []; // Cambiado el nombre de la variable
      querySnapshot.forEach((doc) => {
        productos.push(doc.data());
        console.table(productos);
      });
      return [...productos];
    } catch (error) 
    {
      console.error('Error al obtener los documentos:', error);
    }
  }
  
  
  useEffect(() => 
  {
    const obtenerDatosProducto = async () => 
    {
      const datosProducto = await fetchMultipleDocuments();
      setProducto(datosProducto);
    };

    obtenerDatosProducto();
  }, [id_item]);

  if (!producto) 
  {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {producto && (
        <section className="cont_item_detail">
          <img src={producto[0].imageUrl} alt="" />
          <div>
            <p><strong>nombre producto:</strong> {producto[0].nombre}</p>
            <p><strong>categoría producto:</strong> {producto[0].categoria}</p>
            <p><strong>descripción producto:</strong> {producto[0].descripcion}</p>
            <p><strong>stock actual:</strong> {producto[0].stock}</p>
            <p><strong>precio:</strong> {producto[0].precio}</p>
            <button>regresar a MARKET</button>
            <button>agregar a carrito</button>
          </div>
        </section>
      )}
  </>
  );
};

export default ItemDetail;
