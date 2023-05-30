import './ShopCont.css';
import {useState, useEffect} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import { getDocs, collection} from "firebase/firestore";
import { db } from '../../services/firebase_con';

const ShopCont = (props) => 
{
  const {tipoProductos} = props;
  const [products, setProducts] = useState([]);
  
  useEffect(() => 
  {
    fetchMultipleItems().then((products) => 
    {
      setProducts(products);
    });
  }, []);

  switch(tipoProductos)
  {
    case ":completos":
    case ":simples":          //en caso de que se soliciten tanto items completos como simples, llamo funcion que trae todos
      fetchMultipleItems();
    case ":menor":            //en caso de que se soliciten items ordenados de menor a mayor, llamo funcion que los traiga a todos ordenados 
      break;
    case ":mayor":            //en caso de que se soliciten items ordenados de mayor a menor, llamo funcion que los traiga a todos ordenados
      break;
    default:                  //si no es ninguno de los casos anteriores, seguro se esta llamando por categoria.
      //categorias: 1) cabernet 2) cabernet sauvignon 3) malbec 4) tannat
      break;
  }
  /*
  if(tipoProductos==":completos" || tipoProductos==":simples") //en caso de que se soliciten tanto items completos como simples, llamo funcion que trae todos
  {
    fetchMultipleItems();
  }else 
  {
    if(tipoProductos==":menor") //en caso de que se soliciten items ordenados de menor a mayor, llamo funcion que los traiga a todos ordenados    
    {

    }else if(tipoProductos==":mayor") //en caso de que se soliciten items ordenados de mayor a menor, llamo funcion que los traiga a todos ordenados
    {

    }else                                    
    {
      //categorias: 1) cabernet 2) cabernet sauvignon 3) malbec 4) tannat
    } 
  }*/

  
  async function fetchMultipleItems()   //declaro una funcion asyncrona que traiga todos mis productos de mi coleccion.
  {
    if(fetchMultipleItems.productsCache)     //antes de volver a hacer la consulta, consulto si se encuentra en cache (esto para ahorrar lecturas consumidas en firebase)            
    {
      return fetchMultipleItems.productsCache;
    }else 
    {
      try     //como no hay productos en cache, traigo los docs correspondientes a firebase, en este caso todos los items.
      {
        const productsRef = collection(db, 'inventario');
        const querySnapshot = await getDocs(productsRef);
        const products = []; 

        querySnapshot.forEach((doc) => 
        {
          const productData = doc.data();
          products.push(productData);
        });

        fetchMultipleItems.productsCache = products;  //guardo productos en cache
        return products;
      } catch (error) 
      {
        console.error('Error al obtener los productos:', error);
      }
    }
  }

  return (
    <div className="ShopContenedor">
      { 
        products.length > 0 ? (
          products.map(p => (<CartWidget key={p.id} dataProducto={p} tipo_producto={tipoProductos} />))
        ) : (
          <p>Cargando productos...</p>
        )
      }
    </div>
  );
}

export default ShopCont;
