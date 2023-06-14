import "./ItemDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../services/firebase_con";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      });
      toast("Detalles de producto cargados satisfactoriamente");
      return [...productos];
    } catch (error) 
    {
      toast("Error al obtener item. Codigo de error: ", error);
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

            <Link className="navlink" to={`/market/:completos`}>
              <button>regresar a MARKET</button>
            </Link>
            
          </div>
        </section>
      )}
  </>
  );
};

export default ItemDetail;
