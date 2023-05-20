import "./ItemDetail.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUnProducto } from '../../asyncmock';

const ItemDetail = () => 
{
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
    }, [idItem])

    setTimeout(()=>
    {
        console.log("hola");
    },500);

    return(
        <div>
            <p>algo</p>
            <h2> nombre producto: {producto.nombreProducto}</h2>
        </div>
    );
    
}

export default ItemDetail;
