import "./ItemDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../../asyncmock";


const ItemDetail = () => 
{
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();
  const [descProd, setDescProd] = useState(false);

  useEffect(() => 
  {
    getUnProducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error));
  }, [idItem]);

  useEffect(()=>
  {
    setTimeout(() => {setDescProd(true)}, 100);
  }, []);

  return (
    <>
        <section class="cont_item_detail">
            {descProd && <img src={producto.urlimgProducto} alt="" />}
            <div>
                {descProd && <p><strong>nombre producto:</strong> {producto.nombreProducto}</p>}
                {descProd && <p><strong>categoría producto:</strong> {producto.categoriaProducto}</p>}
                {descProd && <p><strong>descripción producto:</strong> {producto.descriProducto}</p>}
                {descProd && <p><strong>stock actual:</strong> {producto.stockProducto}</p>}
                {descProd && <p><strong>precio:</strong> {producto.precioProducto}</p>}    

                <button>regresar a MARKET</button>
                <button>agregar a carrito</button>
            </div>
        </section>
    </>
  );
};

export default ItemDetail;
