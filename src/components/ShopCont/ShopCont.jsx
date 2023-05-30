import './ShopCont.css';
import {useState, useEffect} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import { getDocs, collection, query, where, doc, updateDoc} from "firebase/firestore";
import { db } from '../../services/firebase_con';

import React, { useContext } from 'react';

const ShopCont = (props) => 
{
  const {tipoProductos} = props;
  /*const [productos, setProductos] = useState([]);*/
  const [products, setProducts] = useState([]);
  const categorias_productos = [":Cabernet", ":CabernetSauvignon",":Malbec", ":Tannat"];
  
  useEffect(() => {
    fetchMultipleItems().then((products) => {
      setProducts(products);
    });
  }, []);

  if(tipoProductos==":completos" || tipoProductos==":simples")
  {
    //en caso de solicitar los productos completos o simples, traigo todos desde el asyncMock (y luego limito lo que muestro de ellos)
    /*getProductos()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))
    */
    fetchMultipleItems();
  }else 
  {
    if(tipoProductos==":menor")     //en caso de solicitar productos organizados de menor a mayor, traigo funcion que los categoriza por
    {
      /*getProductosMenor()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))*/
    }else if(tipoProductos==":mayor")     //en caso de solicitar productos organizados de mayor a menor, traigo funcion que los categoriza por
    {
      /*getProductosMayor()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))*/
    }else                                     //en caso de que no sea ninguna de las anteriores, es porque es una categoria especifica, llamo a funcion pasandole un numero del 1 al 4. buscando la categoria en un array de categorias.
    {

      /*
        categorias:
            1) cabernet
            2) cabernet sauvignon
            3) malbec
            4) tannat
      */

      /*getProductosCategoria(parseInt(categorias_productos.indexOf(tipoProductos))+1)
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))*/
    } 
  }

  //declaro una funcion asyncrona que traiga todos mis productos de mi coleccion.
  async function fetchMultipleItems() 
  {
    // Verificar si los productos ya se han obtenido previamente y devolver la caché en ese caso
    if (fetchMultipleItems.productsCache) 
    {
      console.log('Obteniendo productos de la caché...');
      console.table(fetchMultipleItems.productsCache);
      return fetchMultipleItems.productsCache;
    }

    try 
    {
      const productsRef = collection(db, 'inventario'); // Reemplaza 'productos' con el nombre de tu colección de productos

      const querySnapshot = await getDocs(productsRef);
      const products = [];

      querySnapshot.forEach((doc) => 
      {
        // Obtén los datos de cada documento y agrégalos al arreglo de productos
        const productData = doc.data();
        products.push(productData);
      });

      // Guardar los productos obtenidos en la caché
      fetchMultipleItems.productsCache = products;
      
      return products;
    } catch (error) 
    {
      console.error('Error al obtener los productos:', error);
      return []; // Manejar el caso de error según tus necesidades
    }

  }

  return (
    <div className="ShopContenedor">
      { 
        products.length > 0 ? (
          products.map(p => (<CartWidget dataProducto={p} tipo_producto={tipoProductos} />))
        ) : (
          <p>Cargando productos...</p>
        )
      }
    </div>
  );
}

export default ShopCont;
