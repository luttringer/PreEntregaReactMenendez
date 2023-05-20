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

    return(
        <div>
            <p>algo</p>
            {producto ? <h2> nombre producto: {producto.nombreProducto}</h2> : 'Cargando producto...'}
        </div>
    );
    
}

export default ItemDetail;
