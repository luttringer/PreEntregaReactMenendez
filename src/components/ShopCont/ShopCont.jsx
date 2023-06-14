import './ShopCont.css';
import {useState, useEffect} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import { getDocs, collection, query, orderBy, where} from "firebase/firestore";
import { db } from '../../services/firebase_con';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopCont = (props) => 
{
  const {tipoProductos} = props;
  const [products, setProducts] = useState([]);
  
  useEffect(() => 
  {
    switch(tipoProductos)
    {
      case ":completos":
        fetchMultipleItems().then((products) => 
        {
          setProducts(products);
        });
        break;
      case ":simples":          //en caso de que se soliciten tanto items completos como simples, llamo funcion que trae todos
        fetchMultipleItems().then((products) => 
        {
          setProducts(products);
        });
        break;
      case ":menor":            //en caso de que se soliciten items ordenados de menor a mayor, llamo funcion que los traiga a todos ordenados 
        fetchProductosPorPrecio("asc").then((products) => 
        {
          setProducts(products);
        });
        break;
      case ":mayor":            //en caso de que se soliciten items ordenados de mayor a menor, llamo funcion que los traiga a todos ordenados
        fetchProductosPorPrecio("desc").then((products) => 
        {
          setProducts(products);
        });
        break;
      default:                  //si no es ninguno de los casos anteriores, seguro se esta llamando por categoria.
        switch(tipoProductos)
        {
          case ":Cabernet":
            fetchProductosCategoria(1).then((products) => 
            {
              setProducts(products);
            });
            break;
          case ":CabernetSauvignon":
            fetchProductosCategoria(2).then((products) => 
            {
              setProducts(products);
            });
            break;
          case ":Malbec":
            fetchProductosCategoria(3).then((products) => 
            {
              setProducts(products);
            });
            break;
          case ":Tannat": 
            fetchProductosCategoria(4).then((products) => 
            {
              setProducts(products);
            });
            break;
        }
        //categorias: 1) cabernet 2) cabernet sauvignon 3) malbec 4) tannat
        break;
    }
  }, [tipoProductos]);

  
 
  async function fetchMultipleItems()   //declaro una funcion asyncrona que traiga todos mis productos de mi coleccion.
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

        toast("Productos cargados satisfactoriamente.");
        return products;
      } catch (error) 
      {
        toast("Error al obtener los productos. Codigo de error:", error);
      }
    
  }

  async function fetchProductosPorPrecio(order) {
      try {
        const productsRef = collection(db, 'inventario');
        const q = query(productsRef, orderBy('precio', order));
        const querySnapshot = await getDocs(q);
  
        const products = [];
        querySnapshot.forEach((doc) => {
          const productData = doc.data();
          products.push(productData);
        });

        toast("Productos filtrados por precio cargados satisfactoriamente.");
        return products;
      } catch (error) {
        toast("Error al obtener los productos. Codigo de error:", error);
        return []; // Devolver un array vacío en caso de error
      }
    
  }

  async function fetchProductosCategoria(categoria) {
    try {
      const productsRef = collection(db, 'inventario');
      const q = query(productsRef, where('categoria', '==', categoria));
      const querySnapshot = await getDocs(q);
  
      const products = [];
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        products.push(productData);
      });
      
      toast(`Productos filtrados por categoria cargados satisfactoriamente.`);
      return products;
    } catch (error) {
      toast("Error al obtener los productos. Codigo de error:", error);
      return []; // Devolver un array vacío en caso de error
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
