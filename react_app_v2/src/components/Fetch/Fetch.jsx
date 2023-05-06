import {useState, useEffect} from 'react'; //HOOKS
import "./Fetch.css"

const Fetch = () => 
{
    const [usuarios, setUsuarios] = useState([]); 
    useEffect( ()=>         //funcion de dos parametros
    {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(`en fetch de componente Fetch se genero el siguiente error: ${error}`))
    }, [])


    return (
        <div>
            <h2>usuarios de JSONPlaceHolder</h2>
            {
                usuarios.map(usuario=>{
                    return(
                        <div key={usuario.id}>
                            <p>nombre: {usuario.name}</p>
                            <p>email: {usuario.email}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Fetch;
